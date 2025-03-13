import 'bulma/css/bulma.css';
import Course from './Course';
import './App.css';
import Angular from './images/angular.png';
import Bootstrap from './images/bootstrap5.png';
import CCSharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.png';

function App() {
  return (
    <div className="App">
      <section className="hero is-info">
  <div className="hero-body">
    <p className="title">Kurslarım</p>
  </div>
</section>
        <div className='container'>
          <section className='section'>
          <div className='columns'>
                <div className='column'>
                <Course 
          image={Angular}
          title="Angular" 
          description="Angular'ı sıfırdan öğrenmek isteyenler için kapsamlı bir kurs! Bu eğitimde Angular framework’ünün temellerinden ileri seviyeye kadar tüm konuları öğreneceksiniz. Component'ler, modüller, servisler, yönlendirme (routing), formlar, HTTP istekleri, RxJS kullanımı ve gerçek dünya projeleriyle uygulamalı anlatımlar sizi bekliyor. Kursa başlayabilirsiniz."
        />
                </div>
                <div className='column'>
                <Course 
          image={Bootstrap}
          title="Bootstrapp 5" 
          description="Bootstrap 5 ile modern ve duyarlı web tasarımlarına adım atın! Bu kursta, grid sistemleri, bileşenler, kartlar, butonlar, modal pencereler ve form elemanları gibi Bootstrap'in sunduğu tüm özellikleri detaylıca öğreneceksiniz. Kendi şablonlarınızı nasıl oluşturacağınızı ve Bootstrap'i nasıl özelleştireceğinizi uygulamalarla deneyimleyin!"
        />
                </div>
                <div className='column'>
                <Course
          image={CCSharp}
          title="Komple Web" 
          description="HTML, CSS, JavaScript ve modern kütüphanelerle sıfırdan ileri seviyeye web geliştirme! Bu kursta, web sitelerinin temel yapısını oluşturmayı, stil vermeyi, dinamik içerikler eklemeyi ve backend entegrasyonu yaparak tam donanımlı projeler geliştirmeyi öğreneceksiniz. Gerçek projelerle çalışarak, web geliştirme becerilerinizi profesyonel seviyeye taşıyın!"
        />
                </div>
                <div className='column'>
                <Course 
          image={KompleWeb}
          title="Frontend" 
          description="Frontend dünyasına adım atın ve profesyonel kullanıcı arayüzleri oluşturun! Bu kursta, HTML, CSS, JavaScript, React ve Vue.js gibi popüler teknolojilerle interaktif ve modern web uygulamaları geliştirmeyi öğreneceksiniz. Kullanıcı deneyimini artıran animasyonlar, API entegrasyonları ve performans optimizasyonları hakkında detaylı bilgi edinin!"
        />
                </div>
            </div>
          </section>
            
        </div>              
    </div>
  );
}

export default App;