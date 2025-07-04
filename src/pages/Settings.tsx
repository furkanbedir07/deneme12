import React from 'react';
import { Save, User, Building, Mail, Palette } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Ayarlar
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Sistem ayarlarınızı yönetin
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Profil Ayarları */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-6 w-6 text-primary-600" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Profil Ayarları
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ad
                </label>
                <input
                  type="text"
                  className="input-field"
                  defaultValue="Admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Soyad
                </label>
                <input
                  type="text"
                  className="input-field"
                  defaultValue="User"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  className="input-field"
                  defaultValue="info@melindizayn.com.tr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="input-field"
                  defaultValue="+90 212 555 0000"
                />
              </div>
            </div>
          </div>

          {/* Şirket Ayarları */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="h-6 w-6 text-primary-600" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Şirket Bilgileri
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Şirket Adı
                </label>
                <input
                  type="text"
                  className="input-field"
                  defaultValue="Melin Dizayn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Vergi Numarası
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Vergi numarası"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Adres
                </label>
                <textarea
                  className="input-field"
                  rows={3}
                  placeholder="Şirket adresi"
                />
              </div>
            </div>
          </div>

          {/* E-posta Ayarları */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="h-6 w-6 text-primary-600" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                SMTP Ayarları
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  SMTP Host
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="smtp.gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Port
                </label>
                <input
                  type="number"
                  className="input-field"
                  defaultValue="587"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Kullanıcı Adı
                </label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="E-posta adresi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Şifre
                </label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="E-posta şifresi"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Tema Ayarları */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="h-6 w-6 text-primary-600" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Tema Ayarları
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tema
                </label>
                <select className="input-field">
                  <option>Açık Tema</option>
                  <option>Koyu Tema</option>
                  <option>Sistem Ayarı</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ana Renk
                </label>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer border-2 border-blue-600"></div>
                  <div className="w-8 h-8 bg-green-500 rounded cursor-pointer"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded cursor-pointer"></div>
                  <div className="w-8 h-8 bg-red-500 rounded cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Kaydet Butonu */}
          <button className="w-full btn-primary flex items-center justify-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Ayarları Kaydet</span>
          </button>
        </div>
      </div>
    </div>
  );
}