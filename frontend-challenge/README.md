Frontend Challenge
Bu proje, modern frontend teknolojilerini kullanarak geliştirilmiş bir React uygulamasıdır. Proje, React, Redux Toolkit, TailwindCSS, ve i18next gibi kütüphaneleri kullanarak yapılandırılmıştır. Ayrıca, TypeScript ile geliştirme yapılmış ve Vite ile optimize edilmiştir.

Kurulum
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

Gerekli Bağımlılıkları Yükleyin
Proje dizinine gidin ve gerekli bağımlılıkları yükleyin:

bash
Kodu kopyala
npm install
Geliştirme Sunucusunu Başlatın
Geliştirme sunucusunu başlatmak için aşağıdaki komutu kullanın:

bash
Kodu kopyala
npm run dev
Üretim İçin Derleyin
Projeyi üretim ortamı için derlemek için:

bash
Kodu kopyala
npm run build
Önizleme
Üretim derlemesini önizlemek için:

bash
Kodu kopyala
npm run preview
Kullanılan Teknolojiler ve Kütüphaneler
Temel Bağımlılıklar (dependencies):
@reduxjs/toolkit: Redux için modern ve güvenli bir kullanım sağlar.
i18next: Uluslararasılaştırma (i18n) için güçlü bir araç.
react: Kullanıcı arayüzleri oluşturmak için kullanılan kütüphane.
react-dom: React bileşenlerini DOM'a yerleştirmek için kullanılır.
react-i18next: React uygulamaları için i18next entegrasyonu.
react-icons: Popüler ikon kütüphanelerini React bileşenleri olarak kullanma imkanı sağlar.
react-redux: React ile Redux'ı entegre etmek için kullanılan resmi paket.
react-router-dom: React uygulamaları için istemci tarafı yönlendirme sağlar.
Geliştirme Bağımlılıkları (devDependencies):
@types/react: TypeScript kullanırken React için tip tanımlamaları sağlar.
@types/react-dom: TypeScript kullanırken React DOM için tip tanımlamaları sağlar.
@vitejs/plugin-react: Vite ile React entegrasyonu sağlar.
autoprefixer: CSS stillerine tarayıcı uyumluluğu için otomatik ön ekler ekler.
eslint: JavaScript kod kalitesini kontrol etmek için kullanılan araç.
eslint-plugin-react: React spesifik lint kuralları sağlar.
eslint-plugin-react-hooks: React Hooks kullanımına yönelik lint kuralları sağlar.
eslint-plugin-react-refresh: React Refresh (HMR) ile ilgili lint kuralları sağlar.
postcss: CSS dönüşümleri yapmak için kullanılır.
tailwindcss: Yardımcı sınıflar kullanan CSS framework'ü.
vite: Hızlı ve modern bir geliştirme sunucusu ve build aracı.
Ekstra Bilgiler
TailwindCSS: TailwindCSS kuruludur ve colors.js dosyası ile renk paleti oluşturulmuştur.
Proje Yapısı
Proje yapısı aşağıdaki gibidir:

bash
Kodu kopyala
/src
/assets
/components
/hooks
/context
/pages
/styles
/utils
Katkıda Bulunma
Eğer projeye katkıda bulunmak isterseniz, lütfen bir pull request gönderin. Her türlü katkı ve geri bildirim memnuniyetle karşılanır.

Lisans
Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.

Bu dosya, projeyi başlatmak ve geliştirme sürecinde yardımcı olmak için gereken tüm temel bilgileri sağlar.
