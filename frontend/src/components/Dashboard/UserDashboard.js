import React, { useState } from 'react';

const GridTable = () => {
  const [data, setData] = useState([
    { id: 1, url: 'https://example.com', shortenedUrl: 'https://short.url/abc' , avatar:"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1" },
    { id: 2, url: 'https://example.net', shortenedUrl: 'https://short.url/xyz', avatar:"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1" },
    { id: 3, url: 'https://example.org', shortenedUrl: 'https://short.url/123', avatar:"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1" },
    { id: 4, url: 'https://example.org', shortenedUrl: 'https://short.url/123' , avatar:"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1"},
    { id: 5, url: 'https://example.org', shortenedUrl: 'https://short.url/123' , avatar:"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1"},
    { id: 6, url: 'https://example.org', shortenedUrl: 'https://short.url/123' , avatar:"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1"},
    { id: 7, url: 'https://example.org', shortenedUrl: 'https://short.url/123' , avatar:"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1"}
  ]);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avatar
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                URL
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Shortened URL
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={item.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.url}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.shortenedUrl}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GridTable;