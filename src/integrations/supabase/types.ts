export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          created_at: string | null
          criteria: Json
          description: string
          icon_name: string
          id: string
          is_active: boolean | null
          name: string
          points_reward: number | null
        }
        Insert: {
          created_at?: string | null
          criteria: Json
          description: string
          icon_name: string
          id?: string
          is_active?: boolean | null
          name: string
          points_reward?: number | null
        }
        Update: {
          created_at?: string | null
          criteria?: Json
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean | null
          name?: string
          points_reward?: number | null
        }
        Relationships: []
      }
      game_sessions: {
        Row: {
          completed_at: string | null
          correct_answers: number | null
          current_points: number | null
          current_question_index: number | null
          duration_seconds: number | null
          id: string
          pilot_id: string | null
          power_ups_used: Json | null
          questions_answered: number | null
          questions_sequence: Json | null
          roulette_spins: number | null
          score: number | null
          session_type: string | null
          started_at: string | null
          starting_points: number | null
          status: Database["public"]["Enums"]["game_status"] | null
        }
        Insert: {
          completed_at?: string | null
          correct_answers?: number | null
          current_points?: number | null
          current_question_index?: number | null
          duration_seconds?: number | null
          id?: string
          pilot_id?: string | null
          power_ups_used?: Json | null
          questions_answered?: number | null
          questions_sequence?: Json | null
          roulette_spins?: number | null
          score?: number | null
          session_type?: string | null
          started_at?: string | null
          starting_points?: number | null
          status?: Database["public"]["Enums"]["game_status"] | null
        }
        Update: {
          completed_at?: string | null
          correct_answers?: number | null
          current_points?: number | null
          current_question_index?: number | null
          duration_seconds?: number | null
          id?: string
          pilot_id?: string | null
          power_ups_used?: Json | null
          questions_answered?: number | null
          questions_sequence?: Json | null
          roulette_spins?: number | null
          score?: number | null
          session_type?: string | null
          started_at?: string | null
          starting_points?: number | null
          status?: Database["public"]["Enums"]["game_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "game_sessions_pilot_id_fkey"
            columns: ["pilot_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      image_assets: {
        Row: {
          content_type: string
          created_at: string | null
          file_name: string
          file_path: string
          file_size: number
          id: string
          image_type: string
          is_active: boolean | null
          uploaded_by: string | null
        }
        Insert: {
          content_type: string
          created_at?: string | null
          file_name: string
          file_path: string
          file_size: number
          id?: string
          image_type: string
          is_active?: boolean | null
          uploaded_by?: string | null
        }
        Update: {
          content_type?: string
          created_at?: string | null
          file_name?: string
          file_path?: string
          file_size?: number
          id?: string
          image_type?: string
          is_active?: boolean | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "image_assets_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      leaderboard_entries: {
        Row: {
          average_score: number | null
          calculated_at: string | null
          games_count: number
          id: string
          pilot_id: string | null
          position: number
          ranking_period_end: string | null
          ranking_period_start: string | null
          ranking_type: string
          total_score: number
        }
        Insert: {
          average_score?: number | null
          calculated_at?: string | null
          games_count: number
          id?: string
          pilot_id?: string | null
          position: number
          ranking_period_end?: string | null
          ranking_period_start?: string | null
          ranking_type: string
          total_score: number
        }
        Update: {
          average_score?: number | null
          calculated_at?: string | null
          games_count?: number
          id?: string
          pilot_id?: string | null
          position?: number
          ranking_period_end?: string | null
          ranking_period_start?: string | null
          ranking_type?: string
          total_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "leaderboard_entries_pilot_id_fkey"
            columns: ["pilot_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          is_active: boolean
          source: string | null
          subscribed_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_active?: boolean
          source?: string | null
          subscribed_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_active?: boolean
          source?: string | null
          subscribed_at?: string
        }
        Relationships: []
      }
      question_answers: {
        Row: {
          answered_at: string | null
          id: string
          is_correct: boolean
          pilot_id: string | null
          points_earned: number | null
          question_id: string | null
          selected_answer: string
          session_id: string | null
          time_taken_seconds: number | null
        }
        Insert: {
          answered_at?: string | null
          id?: string
          is_correct: boolean
          pilot_id?: string | null
          points_earned?: number | null
          question_id?: string | null
          selected_answer: string
          session_id?: string | null
          time_taken_seconds?: number | null
        }
        Update: {
          answered_at?: string | null
          id?: string
          is_correct?: boolean
          pilot_id?: string | null
          points_earned?: number | null
          question_id?: string | null
          selected_answer?: string
          session_id?: string | null
          time_taken_seconds?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "question_answers_pilot_id_fkey"
            columns: ["pilot_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "trivia_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_answers_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "game_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      question_images: {
        Row: {
          id: string
          image_id: string | null
          question_id: string | null
        }
        Insert: {
          id?: string
          image_id?: string | null
          question_id?: string | null
        }
        Update: {
          id?: string
          image_id?: string | null
          question_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "question_images_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_images_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "trivia_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      trivia_questions: {
        Row: {
          approved_by: string | null
          category: Database["public"]["Enums"]["question_category"]
          correct_answer: string
          created_at: string | null
          created_by: string | null
          difficulty: Database["public"]["Enums"]["difficulty_level"]
          explanation: string | null
          id: string
          image_url: string | null
          incorrect_answers: Json
          is_approved: boolean | null
          points: number
          question_text: string
          source: string | null
          updated_at: string | null
        }
        Insert: {
          approved_by?: string | null
          category: Database["public"]["Enums"]["question_category"]
          correct_answer: string
          created_at?: string | null
          created_by?: string | null
          difficulty: Database["public"]["Enums"]["difficulty_level"]
          explanation?: string | null
          id?: string
          image_url?: string | null
          incorrect_answers: Json
          is_approved?: boolean | null
          points?: number
          question_text: string
          source?: string | null
          updated_at?: string | null
        }
        Update: {
          approved_by?: string | null
          category?: Database["public"]["Enums"]["question_category"]
          correct_answer?: string
          created_at?: string | null
          created_by?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          explanation?: string | null
          id?: string
          image_url?: string | null
          incorrect_answers?: Json
          is_approved?: boolean | null
          points?: number
          question_text?: string
          source?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trivia_questions_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trivia_questions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_achievements: {
        Row: {
          achievement_id: string | null
          id: string
          pilot_id: string | null
          unlocked_at: string | null
        }
        Insert: {
          achievement_id?: string | null
          id?: string
          pilot_id?: string | null
          unlocked_at?: string | null
        }
        Update: {
          achievement_id?: string | null
          id?: string
          pilot_id?: string | null
          unlocked_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_achievements_pilot_id_fkey"
            columns: ["pilot_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          best_score: number | null
          callsign: string | null
          career_points: number | null
          created_at: string | null
          email: string
          full_name: string
          games_played: number | null
          id: string
          is_active: boolean | null
          is_subscribed: boolean | null
          last_login_at: string | null
          pilot_rank: Database["public"]["Enums"]["pilot_rank"] | null
          rank_progress: number | null
          role: Database["public"]["Enums"]["user_role"] | null
          subscription_ends_at: string | null
          subscription_tier: string | null
          updated_at: string | null
          win_streak: number | null
        }
        Insert: {
          avatar_url?: string | null
          best_score?: number | null
          callsign?: string | null
          career_points?: number | null
          created_at?: string | null
          email: string
          full_name: string
          games_played?: number | null
          id: string
          is_active?: boolean | null
          is_subscribed?: boolean | null
          last_login_at?: string | null
          pilot_rank?: Database["public"]["Enums"]["pilot_rank"] | null
          rank_progress?: number | null
          role?: Database["public"]["Enums"]["user_role"] | null
          subscription_ends_at?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
          win_streak?: number | null
        }
        Update: {
          avatar_url?: string | null
          best_score?: number | null
          callsign?: string | null
          career_points?: number | null
          created_at?: string | null
          email?: string
          full_name?: string
          games_played?: number | null
          id?: string
          is_active?: boolean | null
          is_subscribed?: boolean | null
          last_login_at?: string | null
          pilot_rank?: Database["public"]["Enums"]["pilot_rank"] | null
          rank_progress?: number | null
          role?: Database["public"]["Enums"]["user_role"] | null
          subscription_ends_at?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
          win_streak?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_moderator_or_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      owns_game_session: {
        Args: { session_uuid: string }
        Returns: boolean
      }
    }
    Enums: {
      difficulty_level: "easy" | "medium" | "hard" | "expert"
      game_status: "active" | "completed" | "abandoned"
      pilot_rank:
        | "cadet"
        | "student_pilot"
        | "private_pilot"
        | "commercial_pilot"
        | "first_officer"
        | "captain"
        | "chief_pilot"
      question_category: "AT" | "GT" | "PK" | "ID" | "SH"
      user_role: "admin" | "moderator" | "pilot" | "cadet"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      difficulty_level: ["easy", "medium", "hard", "expert"],
      game_status: ["active", "completed", "abandoned"],
      pilot_rank: [
        "cadet",
        "student_pilot",
        "private_pilot",
        "commercial_pilot",
        "first_officer",
        "captain",
        "chief_pilot",
      ],
      question_category: ["AT", "GT", "PK", "ID", "SH"],
      user_role: ["admin", "moderator", "pilot", "cadet"],
    },
  },
} as const


