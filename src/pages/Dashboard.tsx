import React from 'react';
import { Calendar, Building2, FileText, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      name: 'Toplam Fuar',
      value: '12',
      icon: Calendar,
      change: '+2',
      changeType: 'increase',
    },
    {
      name: 'Aktif Firmalar',
      value: '248',
      icon: Building2,
      change: '+12',
      changeType: 'increase',
    },
    {
      name: 'Bekleyen Teklifler',
      value: '18',
      icon: FileText,
      change: '-3',
      changeType: 'decrease',
    },
    {
      name: 'Bu Ay Gelir',
      value: '₺125,000',
      icon: TrendingUp,
      change: '+8%',
      changeType: 'increase',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Melin CRM sistemine hoş geldiniz
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative bg-white dark:bg-gray-800 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-primary-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {item.value}
              </p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Son Aktiviteler
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Yeni teklif gönderildi - ABC Şirketi
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Fuar eklendi - İstanbul Mobilya Fuarı
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Firma durumu güncellendi - XYZ Ltd.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Yaklaşan Fuarlar
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                İstanbul Mobilya Fuarı
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                15 Mart
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Ankara Teknoloji Fuarı
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                22 Mart
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                İzmir Gıda Fuarı
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                5 Nisan
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}