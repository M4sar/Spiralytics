// Импортируем необходимые хуки и зависимости
import { useState, useRef, useEffect } from "react";
import "./DropdownMenu.css";

// Основной компонент выпадающего меню для выбора языка
export function DropdownMenu() {
  // Состояние для отслеживания открыто/закрыто меню
  const [isOpen, setIsOpen] = useState(false);

  // Текущий выбранный язык (строка, а не массив)
  const [selectedOption, setSelectedOption] = useState("English ");

  // Массив всех доступных языков (включая выбранный)
  const LANGUAGE_OPTIONS = ["English", "Русский", "日本語", "中文"];

  // Создаем ссылки на DOM-элементы для обработки кликов вне меню
  const dropdownRef = useRef(null); // Ссылка на контейнер меню
  const buttonRef = useRef(null); // Ссылка на кнопку открытия меню
  const lastScroll = useRef(0);

  // Эффект для обработки кликов вне области меню
  useEffect(() => {
    // Функция-обработчик клика по документу
    const handleClickOutside = (event) => {
      // Проверяем, что клик был ВНЕ меню и ВНЕ кнопки открытия
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Закрываем меню
      }
    };
    // Добавляем слушатель события mousedown на весь документ
    document.addEventListener("mousedown", handleClickOutside);

    // Функция очистки - удаляем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании

  // Эффект для обработки скролла для сворачивания выпадающего меню
  useEffect(() => {
    // Обработчик скролла вниз
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current || current < lastScroll.current) {
        setIsOpen(false);
      }
      lastScroll.current = current;
    };
    // Добавляем слушатель события scroll на окно
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Функция переключения видимости выпадающего меню
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Инвертируем текущее состояние
  };

  // Функция обработки выбора языка из меню
  const handleSelect = (newSelectedOption) => {
    // Устанавливаем новый выбранный язык
    setSelectedOption(newSelectedOption);
    // Закрываем меню после выбора
    setIsOpen(false);
  };

  // Функция для проверки, является ли опция выбранной
  const isOptionSelected = (option) => {
    return option === selectedOption;
  };
  // Рендер компонента
  return (
    // Контейнер меню с ref для отслеживания кликов
    <>
      {/* Кнопка для открытия/закрытия меню */}
      <button
        className="header__button--change-lang"
        onClick={toggleDropdown}
        ref={buttonRef}
        aria-expanded={isOpen} // ARIA атрибут для доступности
        aria-haspopup="true" // Указывает, что элемент имеет всплывающее меню
      >
        {/* Отображаем текущий выбранный язык */}
        <p className="header__nav__lang--text">{selectedOption}</p>
        {/* Стрелка-индикатор состояния меню */}
        <img
          className="header__nav__lang--img"
          src="/images/arrow.png"
          alt="Toggle dropdown" // Alt текст для доступности
          style={{
            transform: isOpen ? "rotateX(180deg)" : "",
          }}
        />
      </button>
      {/* Условный рендеринг выпадающего меню */}
      <ul
        ref={dropdownRef}
        className={`header__lang-menu ${isOpen ? "open" : ""}`}
      >
        {/* Маппим массив всех языков в элементы списка */}
        {LANGUAGE_OPTIONS.map((option) => (
          <li
            key={option} // Уникальный ключ на основе значения языка
            className={`header__lang-menu-item ${
              isOptionSelected(option) ? "header__lang-menu-item--selected" : ""
            }`} // Добавляем класс для выбранного элемента
            onClick={() => handleSelect(option)} // Обработчик выбора языка
          >
            {/* Контейнер для содержимого пункта меню */}

            {/* Отображаем название языка */}
            <p className="header__lang-menu-paragraph">{option}</p>

            {/* Условно рендерим галочку для выбранного языка */}
            {isOptionSelected(option) && (
              <img
                src="/images/check.png"
                alt="Selected"
                className="header__lang-menu-icon--selected"
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
