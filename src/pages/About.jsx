import React from "react";

export default function About() {
  return (
    <div className="pt-28 p-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E293B] mb-6">Về MaintainPro</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          MaintainPro là hệ thống quản lý bảo trì thiết bị hiện đại, giúp doanh nghiệp và cá nhân dễ dàng
          theo dõi, quản lý và tối ưu quy trình bảo trì. Chúng tôi hướng đến mục tiêu mang lại sự tiện lợi,
          minh bạch và hiệu quả trong công tác quản lý thiết bị.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Tầm nhìn & Sứ mệnh</h2>
        <p className="text-gray-700 mb-6">
          - Trở thành nền tảng quản lý bảo trì hàng đầu Việt Nam. <br />
          - Đảm bảo mọi thiết bị đều được chăm sóc, giám sát và bảo trì đúng quy trình. <br />
          - Giúp doanh nghiệp giảm thiểu rủi ro, tiết kiệm chi phí và tăng tuổi thọ thiết bị.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Giá trị cốt lõi</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Độ tin cậy – Mọi yêu cầu đều được xử lý minh bạch, nhanh chóng.</li>
          <li>Tận tâm – Hỗ trợ người dùng 24/7 với đội ngũ kỹ thuật viên chuyên nghiệp.</li>
          <li>Hiện đại – Ứng dụng công nghệ web mới nhất trong quản lý bảo trì.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Liên hệ</h2>
        <p className="text-gray-700">
          📍 Địa chỉ: 123 Đường Trần Phú, Đà Nẵng <br />
          ☎️ Hotline: 0901 234 567 <br />
          ✉️ Email: support@maintainpro.vn
        </p>
      </div>
    </div>
  );
}
