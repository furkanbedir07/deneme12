import React from 'react';
import { Plus, FileText, Calendar, DollarSign } from 'lucide-react';

export default function Quotations() {
  const quotations = [
    {
      id: 1,
      title: 'Stand Projesi - ABC Mobilya',
      company: 'ABC Mobilya Ltd.',
      type: 'Stand Projesi',
      amount: 25000,
      currency: 'TRY',
      status: 'Gönderildi',
      sentDate: '2024-03-10',
      validUntil: '2024-03-25',
    },
    {
      id: 2,
      title: 'Hostes & Catering - XYZ Teknoloji',
      company: 'XYZ Teknoloji A.Ş.',
      type: 'Hostes & Catering',
      amount: 15000,
      currency: 'TRY',
      status: 'Değerlendiriliyor',
      sentDate: '2024-03-08',
      validUntil: '2024-03-22',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Gönderildi':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Değerlendiriliyor':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Onaylandı':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Reddedildi':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Teklifler
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Teklif süreçlerinizi yönetin
          </p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Yeni Teklif</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {quotations.map((quotation) => (
          <div
            key={quotation.id}
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {quotation.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {quotation.company}
                </p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                  quotation.status
                )}`}
              >
                {quotation.status}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FileText className="h-4 w-4 mr-2" />
                {quotation.type}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <DollarSign className="h-4 w-4 mr-2" />
                {quotation.amount.toLocaleString('tr-TR')} {quotation.currency}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                Gönderilme: {new Date(quotation.sentDate).toLocaleDateString('tr-TR')}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                Geçerlilik: {new Date(quotation.validUntil).toLocaleDateString('tr-TR')}
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