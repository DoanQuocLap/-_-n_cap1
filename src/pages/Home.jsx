import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1E293B] text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to MaintainPro
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Giải pháp bảo trì và quản lý thiết bị thông minh – nhanh chóng, chính xác, đáng tin cậy.
        </p>
        <Link
          to="/submit-ticket"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Gửi yêu cầu bảo trì ngay
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Theo dõi thiết bị</h3>
          <p className="text-gray-600">
            Quản lý toàn bộ thông tin thiết bị của bạn, theo dõi tình trạng hoạt động và lịch sử bảo trì.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Gửi yêu cầu dễ dàng</h3>
          <p className="text-gray-600">
            Chỉ với vài cú nhấp chuột, bạn có thể gửi ticket và theo dõi quá trình xử lý trực tuyến.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Kết nối kỹ thuật viên</h3>
          <p className="text-gray-600">
            Hệ thống tự động phân công kỹ thuật viên phù hợp, giúp bạn tiết kiệm thời gian và công sức.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Bạn cần hỗ trợ bảo trì?</h2>
        <p className="text-gray-200 mb-6">Chúng tôi luôn sẵn sàng hỗ trợ 24/7.</p>
        <Link
          to="/about"
          className="bg-white text-blue-700 font-medium px-5 py-2 rounded-lg shadow hover:bg-gray-200"
        >
          Tìm hiểu thêm
        </Link>
      </section>
    </div>
  );
}
