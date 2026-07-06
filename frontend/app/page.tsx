export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-4 bg-slate-900 text-white sticky top-0">
        <h1 className="font-bold text-xl">مركز مشيرف</h1>

        <nav className="flex gap-6 text-sm">
          <a href="#">الرئيسية</a>
          <a href="#">الخدمات</a>
          <a href="#">العاملات</a>
          <a href="#">اتصل بنا</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-r from-slate-900 to-blue-800 text-white">
        <h2 className="text-4xl font-bold mb-3">
          مركز مشيرف لخدمات العمالة المساعدة
        </h2>

        <p>Musheirif Domestic Workers Services Center</p>

        <p className="mt-2 opacity-80">
          مركز معتمد في دولة الإمارات العربية المتحدة
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-500 px-5 py-2 rounded">
            اطلب خدمة
          </button>

          <a
            href="https://wa.me/971564141142"
            className="bg-green-600 px-5 py-2 rounded"
          >
            واتساب مباشر
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 text-center">
        <h3 className="text-2xl font-bold mb-8">خدماتنا</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">

          {[
            "عاملة منزلية",
            "مربية أطفال",
            "سائق خاص",
            "طباخة",
            "مقدم رعاية",
            "تنظيف منازل"
          ].map((item, i) => (
            <div key={i} className="border p-6 rounded shadow-sm hover:shadow-md">
              {item}
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}