import React from 'react';
import { Plus, Calendar, MapPin, Users } from 'lucide-react';

export default function Exhibitions() {
  const exhibitions = [
    {
      id: 1,
      name: 'İstanbul Mobilya Fuarı',
      date: '2024-03-15',
      endDate: '2024-03-18',
      city: 'İstanbul',
      venue: 'CNR Expo',
      category: 'Mobilya',
      status: 'Aktif',
      companies: 45,
    },
    {
      id: 2,
      name: 'Ankara Teknoloji Fuarı',
      date: '2024-03-22',
      endDate: '2024-03-25',
      city: 'Ankara',
      venue: 'ATO Congresium',
      category: 'Teknoloji',
      status: 'Planlama',
      companies: 23,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Fuarlar
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Fuar organizasyonlarınızı yönetin
          </p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Yeni Fuar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {exhibitions.map((exhibition) => (
          <div
            key={exhibition.id}
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {exhibition.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {exhibition.category}
                </p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  exhibition.status === 'Aktif'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}
              >
                {exhibition.status}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(exhibition.date).toLocaleDateString('tr-TR')} -{' '}
                {new Date(exhibition.endDate).toLocaleDateString('tr-TR')}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                {exhibition.venue}, {exhibition.city}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Users className="h-4 w-4 mr-2" />
                {exhibition.companies} firma
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 btn-secondary text-sm">
                Düzenle
              </button>
              <button className="flex-1 btn-primary text-sm">
                Detaylar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}