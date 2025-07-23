import Icon from '@/components/ui/icon';
import { InfinityRings, PeopleIcon, DiningIcon } from '@/components/WeddingIcons';

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/img/6e49ddaf-673e-4e20-8ac9-c21812bf0708.jpg)`
        }}
      >
        <div className="relative z-10 text-center px-4">
          {/* Date */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-great-vibes" style={{ color: '#F5F5DC' }}>
              20.09.2025
            </h1>
          </div>
          
          {/* Names */}
          <div className="mb-4">
            <h2 className="text-4xl md:text-6xl font-great-vibes" style={{ color: '#F5F5DC' }}>
              Авенир & Наталья
            </h2>
          </div>
          
          {/* Wedding text */}
          <div className="mb-16">
            <p className="text-xl md:text-2xl font-great-vibes tracking-widest" style={{ color: '#F5F5DC', opacity: 0.8 }}>
              wedding
            </p>
          </div>

          {/* Decorative rings icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)' }}>
              <span className="text-2xl">💍</span>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToInvitation}
            className="animate-bounce cursor-pointer transition-all hover:scale-110"
            aria-label="Прокрутить к приглашению"
          >
            <Icon name="ChevronDown" size={32} style={{ color: '#F5F5DC', opacity: 0.7 }} />
          </button>
        </div>
      </section>

      {/* Invitation Section - Second Screen */}
      <section 
        id="invitation"
        className="min-h-screen flex flex-col relative bg-cover bg-center bg-no-repeat px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/a9573cb9-aa9e-4204-9798-622d45274eb3.jpg)`
        }}
      >
        <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10">
          {/* А&Н */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-great-vibes" style={{ color: '#F5F5DC' }}>
              А&Н
            </h1>
          </div>
          
          {/* Персональное обращение */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-great-vibes" style={{ color: '#F5F5DC' }}>
              Дорогой Александр
            </h2>
          </div>
          
          {/* Основной текст приглашения */}
          <div className="mb-8 max-w-2xl">
            <p className="text-lg md:text-xl font-montserrat leading-relaxed" style={{ color: '#F5F5DC' }}>
              Приглашаем отпраздновать вместе с нами счастливый день нашей свадьбы
            </p>
          </div>

          {/* Дата */}
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl font-great-vibes" style={{ color: '#F5F5DC' }}>
              20 | сентября | 2025
            </h3>
          </div>

          {/* Кольца */}
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/6fec6047-8057-4197-ab53-b106cab095d8.png" 
              alt="Свадебные кольца"
              className="h-16 md:h-20 w-auto inline-block"
              style={{
                filter: 'brightness(0) saturate(100%) invert(92%) sepia(10%) saturate(372%) hue-rotate(9deg) brightness(103%) contrast(96%)',
                opacity: 0.9
              }}
            />
          </div>

          {/* Информация о месте */}
          <div className="mb-12 max-w-3xl">
            <p className="text-base md:text-lg font-montserrat leading-relaxed text-center" style={{ color: '#F5F5DC' }}>
              Торжество будет проходить в ресторане "Атлант" по адресу г. Ленинск-Кузнецкий, пос. Демьяновка, ул. Кемеровская 22а.
            </p>
          </div>
        </div>

        {/* Временная шкала */}
        <div className="relative z-10 pb-8">
          <div className="max-w-md mx-auto">
            {/* Вертикальная линия */}
            <div className="relative ml-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#800000' }}></div>
              
              {/* Сбор гостей */}
              <div className="relative flex items-center mb-8 pl-12">
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                  <PeopleIcon />
                </div>
                <div className="text-left">
                  <p className="font-montserrat font-medium" style={{ color: '#F5F5DC' }}>15:30 сбор гостей</p>
                </div>
              </div>
              
              {/* Праздничный банкет */}
              <div className="relative flex items-center pl-12">
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                  <DiningIcon />
                </div>
                <div className="text-left">
                  <p className="font-montserrat font-medium" style={{ color: '#F5F5DC' }}>16:00 Праздничный банкет</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Подвал */}
        <div className="relative z-10 text-center pb-6">
          <p className="text-2xl font-great-vibes" style={{ color: '#F5F5DC' }}>
            До встречи!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;