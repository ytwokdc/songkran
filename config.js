// ============================================================
//  CONFIG.JS — ตั้งค่าทั้งหมดที่นี่
//  แก้ไขแล้ว commit ขึ้น GitHub เพื่อให้ใช้ได้ทุกเครื่อง
// ============================================================

const CONFIG = {

  // --- ข้อความสุ่มที่จะลอยขึ้นเมื่อคลิกปุ่ม ---
  messages: [
    'สุขสันต์วันสงกรานต์',
    'สวัสดีปีใหม่ไทย',
    'ขอพรปีใหม่',
    'โชคดีตลอดปี',
    'รับน้ำแห่งความสุข',
    'สุขภาพแข็งแรง',
    'ร่ำรวยมีสุข',
  ],

  // --- ชื่อแต่ละปุ่ม (สำหรับแสดงใน Dashboard) ---
  buttonNames: [
    'ผพว.',
    'พี่ใหญ่',
    'พี่มุก',
    'อ.วุฒิ',
    'พี่แว่น',
    'อ.โอ',
    'ดร.เชาว์',
    'พี่เติม',
    'ดร.ชัย',
    'พี่บี',
    'พี่หลิน',
  ],

  // --- URL ของ Google Apps Script ---
  scriptUrl: 'https://script.google.com/macros/s/AKfycbwx0DTMKzuE8Ziw5BbSWjBAjSj7xv1cQ06d2Wj02XS_PYl6ur-Rb-Jy1Exo5GgyefnD3g/exec',

  // --- รหัสผ่านหน้า Admin ---
  adminPassword: 'admin1234',

  // --- ขนาดปุ่มบนหน้าเว็บ (px) ---
  buttonWidth: 160,

  // --- ขนาด cursor (px) ---
  cursorSize: {
    normal: 90,
    over:   80,
    click:  70,
  },

  // --- ตัวอักษรลอย ---
  floatFont:        'Anuphan',   // Sarabun หรือ Anuphan
  floatSize:        1.2,         // ขนาด (rem)
  floatColor:       '#fffaa3',   // สีตัวอักษร
  floatStroke:      '#000000',   // สีขอบ
  floatStrokeWidth: 2,           // ความหนาขอบ (px) 0-6

};
