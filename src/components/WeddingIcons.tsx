interface IconProps {
  className?: string;
}

export const InfinityRings = ({ className = "" }: IconProps) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Левое кольцо */}
      <circle cx="12" cy="12" r="10" stroke="#800000" strokeWidth="3" fill="none" opacity="0.8" />
      <circle cx="12" cy="12" r="7" stroke="#800000" strokeWidth="2" fill="none" opacity="0.6" />
      
      {/* Правое кольцо */}
      <circle cx="36" cy="12" r="10" stroke="#800000" strokeWidth="3" fill="none" opacity="0.8" />
      <circle cx="36" cy="12" r="7" stroke="#800000" strokeWidth="2" fill="none" opacity="0.6" />
      
      {/* Соединяющая линия */}
      <path d="M22 12 L26 12" stroke="#800000" strokeWidth="2" opacity="0.7" />
      
      {/* Блики на кольцах */}
      <circle cx="9" cy="9" r="2" fill="#F5F5DC" opacity="0.3" />
      <circle cx="33" cy="9" r="2" fill="#F5F5DC" opacity="0.3" />
    </svg>
  </div>
);

export const PeopleIcon = ({ className = "" }: IconProps) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Первый человек */}
      <circle cx="8" cy="7" r="4" stroke="#800000" strokeWidth="2" fill="none" />
      <path d="M2 22 C2 18 5 16 8 16 C11 16 14 18 14 22" stroke="#800000" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Второй человек */}
      <circle cx="18" cy="6" r="4" stroke="#800000" strokeWidth="2" fill="none" />
      <path d="M12 22 C12 18 15 16 18 16 C21 16 24 18 24 22" stroke="#800000" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Третий человек */}
      <circle cx="28" cy="7" r="4" stroke="#800000" strokeWidth="2" fill="none" />
      <path d="M22 22 C22 18 25 16 28 16 C31 16 34 18 34 22" stroke="#800000" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

export const DiningIcon = ({ className = "" }: IconProps) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Тарелка */}
      <circle cx="16" cy="12" r="10" stroke="#800000" strokeWidth="2" fill="none" />
      <circle cx="16" cy="12" r="7" stroke="#800000" strokeWidth="1.5" fill="none" opacity="0.6" />
      
      {/* Вилка слева */}
      <path d="M4 4 L4 20" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 4 L2 10" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 4 L6 10" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 10 L6 10" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Нож справа */}
      <path d="M28 4 L28 20" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 4 L30 4 L28 8 Z" fill="#800000" opacity="0.7" />
    </svg>
  </div>
);