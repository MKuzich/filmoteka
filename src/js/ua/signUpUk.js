export function signUpUk() {
    return `<div class="signup-modal">
    <button
      type="button"
      class="signup-modal__close-btn"
      data-signup-modal-close
    >
      <svg
        class="signup-modal__close-icon"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <path d="M8 8L22 22" stroke-width="2" />
        <path d="M8 22L22 8" stroke-width="2" />
      </svg>
    </button>
    <h2 class="signup-modal__title">
      Введіть мило і пароль для реєстрації
    </h2>
    <form class="signup-form" data-signup-form>
      <div class="signup-form__field">
        <label class="signup-form__label">
          <span class="signup-form__name">Мило</span>
          <input class="signup-form__input" type="email" name="email" />
          <svg class="signup-form__icon">
            <use href="./images/signup-form-defs.svg#email"></use>
          </svg>
        </label>
      </div>
      <div class="signup-form__field">
        <label class="signup-form__label">
          <span class="signup-form__name">Пароль</span>
          <input class="signup-form__input" type="password" name="password" />
          <svg class="signup-form__icon">
            <use href="./images/signup-form-defs.svg#password"></use>
          </svg>
        </label>
      </div>

      <button class="signup-form__btn" type="submit">Пароль</button>
    </form>
  </div>`
}