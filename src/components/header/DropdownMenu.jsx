// Импортируем необходимые хуки и зависимости
import { useState, useRef, useEffect } from "react";
import "./DropdownMenu.css";
import arrow from "../../assets/images/arrow.png";
import check from "../../assets/images/check.png";

// Основной компонент выпадающего меню для выбора языка
export default function DropdownMenu() {
  // Состояние для отслеживания открыто/закрыто меню
  const [isOpen, setIsOpen] = useState(false);

  // Текущий выбранный язык (строка, а не массив)
  const [selectedOption, setSelectedOption] = useState("En");

  // Массив всех доступных языков (включая выбранный)
  const LANGUAGE_OPTIONS = ["En", "Russian", "日本語", "中文"];

  // Создаем ссылки на DOM-элементы для обработки кликов вне меню
  const dropdownRef = useRef(null); // Ссылка на контейнер меню
  const buttonRef = useRef(null); // Ссылка на кнопку открытия меню

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
    // mousedown срабатывает раньше click, что улучшает UX
    document.addEventListener("mousedown", handleClickOutside);

    // Функция очистки - удаляем слушатель при размонтировании компонента
    // Это предотвращает утечки памяти и ошибки
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании

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
    <div className="dropdown" ref={dropdownRef}>
      {/* Кнопка для открытия/закрытия меню */}
      <button
        className="dropdown-toggle"
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
          src={arrow}
          alt="Toggle dropdown" // Alt текст для доступности
        />
      </button>

      {/* Условный рендеринг выпадающего меню */}
      {isOpen && (
        <ul className="dropdown-menu">
          {/* Маппим массив всех языков в элементы списка */}
          {LANGUAGE_OPTIONS.map((option) => (
            <li
              key={option} // Уникальный ключ на основе значения языка
              className={`dropdown-item ${
                isOptionSelected(option) ? "dropdown-item--selected" : ""
              }`} // Добавляем класс для выбранного элемента
              onClick={() => handleSelect(option)} // Обработчик выбора языка
            >
              {/* Контейнер для содержимого пункта меню */}
              <div className="dropdown-item-content">
                {/* Отображаем название языка */}
                <p className="dropmenu--list">{option}</p>

                {/* Условно рендерим галочку для выбранного языка */}
                {isOptionSelected(option) && (
                  <img
                    src={check}
                    alt="Selected"
                    className="dropdown-check-icon"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
