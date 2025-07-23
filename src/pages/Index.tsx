import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToInvitation = () => {
    document.getElementById('invitation')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - First Screen */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/img/6e49ddaf-673e-4e20-8ac9-c21812bf0708.jpg)`
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-transparent to-emerald-900/40"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          {/* Date */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-montserrat font-light tracking-wider">
              20.09.2025
            </h1>
          </div>
          
          {/* Names */}
          <div className="mb-4">
            <h2 className="text-4xl md:text-6xl font-cormorant italic font-medium text-white/95">
              Авенир & Наталья
            </h2>
          </div>
          
          {/* Wedding text */}
          <div className="mb-16">
            <p className="text-xl md:text-2xl font-cormorant italic text-white/80 tracking-widest">
              wedding
            </p>
          </div>

          {/* Decorative rings icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-2xl">💍</span>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToInvitation}
            className="animate-bounce cursor-pointer transition-all hover:scale-110"
            aria-label="Прокрутить к приглашению"
          >
            <Icon name="ChevronDown" size={32} className="text-white/70" />
          </button>
        </div>
      </section>

      {/* Invitation Section - Second Screen */}
      <section 
        id="invitation"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative floral element */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 text-emerald-600">
              <span className="text-3xl">🌿</span>
              <span className="text-4xl">💐</span>
              <span className="text-3xl">🌿</span>
            </div>
          </div>
          
          {/* Main invitation text */}
          <div className="mb-12">
            <h3 className="text-4xl md:text-6xl font-cormorant italic text-emerald-800 leading-relaxed">
              Дорогие, приходите<br />на нашу свадьбу
            </h3>
          </div>

          {/* Additional invitation details */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-emerald-200">
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-emerald-600 mr-2" />
                  <span className="text-lg font-montserrat text-emerald-700">Место проведения</span>
                </div>
                <p className="text-emerald-800 font-cormorant italic text-xl">
                  Будет объявлено дополнительно
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="Clock" size={24} className="text-emerald-600 mr-2" />
                  <span className="text-lg font-montserrat text-emerald-700">Время</span>
                </div>
                <p className="text-emerald-800 font-cormorant italic text-xl">
                  Уточняется
                </p>
              </div>

              <div className="border-t border-emerald-200 pt-6">
                <p className="text-emerald-700 font-cormorant italic text-lg">
                  С любовью ждем вас на нашем празднике! ✨
                </p>
              </div>
            </div>

            {/* RSVP placeholder */}
            <div className="mt-8">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-montserrat px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
                Подтвердить присутствие
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;