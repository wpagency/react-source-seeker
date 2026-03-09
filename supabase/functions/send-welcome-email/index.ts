
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WelcomeEmailRequest {
  email: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Welcome email function called');

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(resendApiKey);
    const { email, source = 'newsletter' }: WelcomeEmailRequest = await req.json();

    console.log(`Sending welcome email to: ${email}, source: ${source}`);

    const emailResponse = await resend.emails.send({
      from: 'Source Seeker <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to Source Seeker.space Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Source Seeker.space</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; border-radius: 10px; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
                Welcome to Source Seeker<span style="color: #60a5fa;">.space</span>
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Digital solutions that drive real results
              </p>
            </div>
            
            <div style="padding: 0 20px;">
              <h2 style="color: #1f2937; margin-bottom: 20px;">Thank you for subscribing!</h2>
              
              <p style="margin-bottom: 20px;">
                We're excited to have you join our community of forward-thinking business leaders and digital enthusiasts.
              </p>
              
              <p style="margin-bottom: 20px;">
                You'll receive our carefully curated insights on:
              </p>
              
              <ul style="margin-bottom: 30px; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Latest web development trends and technologies</li>
                <li style="margin-bottom: 8px;">Digital transformation strategies that actually work</li>
                <li style="margin-bottom: 8px;">Case studies from successful projects</li>
                <li style="margin-bottom: 8px;">Exclusive tips and best practices</li>
              </ul>
              
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; font-style: italic; color: #4b5563;">
                  "We believe in creating digital experiences that make growth feel inevitable. 
                  Technology should serve humanity with thoughtful design."
                </p>
              </div>
              
              <div style="text-align: center; margin-bottom: 30px;">
                <a href="https://example.com.space" 
                   style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                  Visit Our Website
                </a>
              </div>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              
              <p style="font-size: 14px; color: #6b7280; text-align: center; margin-bottom: 10px;">
                This email was sent because you subscribed to our newsletter${source === 'footer' ? ' via our website footer' : ''}.
              </p>
              
              <p style="font-size: 14px; color: #6b7280; text-align: center;">
                Source Seeker.space | Global Digital Solutions<br>
                <a href="mailto:hello@example.com.space" style="color: #3b82f6;">hello@example.com.space</a>
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      throw emailResponse.error;
    }

    console.log('Welcome email sent successfully:', emailResponse.data?.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error sending welcome email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send welcome email',
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);


