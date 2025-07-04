/*
  # Admin kullanıcı hesabı oluştur

  1. Yeni Kullanıcı
    - E-posta: info@melindizayn.com.tr
    - Şifre: 270381Fb*
    - Rol: Admin
  
  2. Güvenlik
    - E-posta onayı devre dışı
    - Otomatik giriş aktif
*/

-- Admin kullanıcısını auth.users tablosuna ekle
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'info@melindizayn.com.tr',
  crypt('270381Fb*', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{"first_name": "Admin", "last_name": "User"}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
) ON CONFLICT (email) DO NOTHING;

-- Kullanıcı profil bilgilerini ekle (eğer profiles tablosu varsa)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'profiles') THEN
    INSERT INTO profiles (
      id,
      email,
      first_name,
      last_name,
      role,
      created_at,
      updated_at
    ) 
    SELECT 
      id,
      email,
      'Admin',
      'User',
      'admin',
      NOW(),
      NOW()
    FROM auth.users 
    WHERE email = 'info@melindizayn.com.tr'
    ON CONFLICT (id) DO NOTHING;
  END IF;
END $$;