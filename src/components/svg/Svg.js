export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width="0" height="0" style={{position: 'absolute'}}>
        <symbol viewBox="0 0 26.207 50.401" id="bigben">
          <path fill="currentColor"
                d="M11.088 41.664v7.392c0 .73-.616 1.346-1.344 1.346-.73 0-1.345-.616-1.345-1.346v-7.392c0-.728.615-1.344 1.344-1.344.728 0 1.344.617 1.344 1.344zm-.393-34.552l2.408-3.416 2.408 3.416c.28.392.673.56 1.12.56.28 0 .56-.056.785-.224.615-.448.784-1.288.337-1.848L14.224.56C14 .224 13.552 0 13.104 0s-.84.224-1.12.56L8.512 5.544c-.45.616-.28 1.456.336 1.848.615.448 1.456.336 1.847-.28zM21.84 49.056c0 .73.615 1.345 1.344 1.345s1.344-.615 1.344-1.344V37.968h.336a1.36 1.36 0 0 0 1.344-1.344v-20.16c0-.728-.615-1.344-1.344-1.344h-2.632l-2.968-4.48c-.057-.056-.112-.168-.168-.224l-.112-.112c-.056 0-.056-.056-.112-.056s-.056-.056-.11-.056c-.058 0-.058-.056-.112-.056s-.11-.056-.168-.056-.057 0-.11-.056H7.615c-.056 0-.11 0-.168.056-.056 0-.056.056-.11.056-.058 0-.113.056-.113.056-.056 0-.056.056-.112.056L7 10.36a.756.756 0 0 0-.168.224l-2.97 4.424h-2.52c-.727 0-1.342.616-1.342 1.344v20.16c0 .73.615 1.346 1.344 1.346h.336v11.088c0 .73.615 1.344 1.344 1.344s1.344-.614 1.344-1.344V37.968h5.377c.728 0 1.344-.615 1.344-1.344s-.617-1.344-1.345-1.344H2.688V17.752h7.056c.73 0 1.345-.616 1.345-1.344s-.617-1.344-1.345-1.344h-2.52l1.566-2.352h8.626l1.567 2.352h-2.52c-.73 0-1.345.616-1.345 1.344s.615 1.344 1.344 1.344h7.057V35.28H16.46c-.73 0-1.344.615-1.344 1.344s.615 1.344 1.344 1.344h5.377v11.088zm-8.736-14.448c-4.424 0-8.064-3.64-8.064-8.064 0-4.423 3.64-8.064 8.064-8.064s8.064 3.64 8.064 8.064-3.64 8.064-8.064 8.064zm5.375-8.12c0-1.01-.28-1.904-.73-2.744l-3.695 3.696c-.28.28-.616.392-.952.392s-.672-.112-.952-.392c-.503-.504-.503-1.4 0-1.904l3.697-3.696a5.566 5.566 0 0 0-2.744-.728 5.377 5.377 0 0 0-5.376 5.376c0 2.968 2.408 5.376 5.376 5.376s5.376-2.408 5.376-5.376zM16.462 50.4c.73 0 1.345-.616 1.345-1.345v-7.393c0-.73-.616-1.344-1.345-1.344s-1.344.615-1.344 1.344v7.393c0 .73.615 1.345 1.343 1.345z"></path>
        </symbol>
        <symbol viewBox="0 0 65 64.999" id="carousel-next">
          <g fill="currentColor">
            <path d="M34.518 30.49H24.46v4.02H34.52v3.98l6.02-5.998-6.02-5.98z"></path>
            <path
              d="M32.5 65C14.58 65 0 50.42 0 32.5S14.58 0 32.5 0 65 14.58 65 32.5 50.42 65 32.5 65zm0-61C16.784 4 4 16.785 4 32.5 4 48.214 16.784 61 32.5 61 48.215 61 61 48.213 61 32.5 61 16.785 48.213 4 32.5 4z"></path>
          </g>
        </symbol>
        <symbol viewBox="0 0 65 64.999" id="carousel-prev">
          <g fill="currentColor">
            <path d="M30.482 34.51H40.54v-4.02H30.48v-3.98l-6.02 5.997 6.02 5.98z"></path>
            <path
              d="M32.5 0C50.42 0 65 14.578 65 32.5 65 50.42 50.42 65 32.5 65S0 50.42 0 32.5C0 14.577 14.58 0 32.5 0zm0 61C48.216 61 61 48.213 61 32.5 61 16.784 48.216 4 32.5 4 16.785 4 4 16.785 4 32.5 4 48.213 16.787 61 32.5 61z"></path>
          </g>
        </symbol>
        <symbol viewBox="0 0 65 64.998" id="carousel-zoom-in">
          <g fill="currentColor">
            <path
              d="M30.74 27.77l.002 2.888h-2.97a1.772 1.772 0 0 0 0 3.546h2.97v3.022a1.77 1.77 0 1 0 3.543 0v-3.022h2.942a1.773 1.773 0 0 0 0-3.545h-2.94v-2.89a1.773 1.773 0 0 0-3.545 0z"></path>
            <path
              d="M32.5 64.998C14.58 64.998 0 50.42 0 32.5S14.58 0 32.5 0 65 14.58 65 32.5 50.42 64.998 32.5 64.998zM32.5 4C16.784 4 4 16.785 4 32.5c0 15.713 12.784 28.498 28.5 28.498C48.215 60.998 61 48.213 61 32.5 61 16.785 48.213 4 32.5 4z"></path>
          </g>
        </symbol>
        <symbol viewBox="0 0 65 64.998" id="carousel-zoom-out">
          <g fill="currentColor">
            <path
              d="M30.74 34.277h3.546v-.006h2.94a1.773 1.773 0 0 0 0-3.543h-2.94v-.006H30.74v.005l-2.97.002a1.772 1.772 0 0 0 0 3.544h2.97v.007z"></path>
            <path
              d="M32.5 64.998C14.58 64.998 0 50.42 0 32.5S14.58 0 32.5 0 65 14.58 65 32.5 50.42 64.998 32.5 64.998zM32.5 4C16.784 4 4 16.785 4 32.5c0 15.713 12.784 28.498 28.5 28.498C48.215 60.998 61 48.213 61 32.5 61 16.785 48.213 4 32.5 4z"></path>
          </g>
        </symbol>
        <symbol viewBox="0 0 10.269 10.29" id="close">
          <path fill="currentColor"
                d="M7.205.577L5.165 2.62 3.06.52A1.773 1.773 0 0 0 .555 3.026l2.1 2.1L.52 7.264A1.77 1.77 0 1 0 3.027 9.77l2.136-2.137 2.08 2.08A1.774 1.774 0 0 0 9.75 7.205l-2.08-2.08 2.043-2.042A1.773 1.773 0 0 0 7.205.577z"></path>
        </symbol>
        <symbol viewBox="0 0 31.548 51.148" id="eiffeltower">
          <g fill="currentColor">
            <path
              d="M21.162 43.155c-1.593-1.597-3.45-2.438-5.376-2.438-1.883 0-3.708.812-5.276 2.346-1.446 1.41-2.633 3.412-3.433 5.79-.266.8.166 1.665.964 1.933.788.256 1.673-.188 1.935-.963.648-1.923 1.574-3.508 2.676-4.582 1.98-1.937 4.373-1.907 6.344.07 1.128 1.132 2.06 2.782 2.693 4.774.202.637.79 1.064 1.457 1.064a1.516 1.516 0 0 0 1.452-1.984c-.78-2.457-1.968-4.535-3.434-6.01z"></path>
            <path
              d="M31.148 47.36c-2.342-2.57-4.387-5.56-6.085-8.884h2.194c.85 0 1.54-.69 1.54-1.54a1.54 1.54 0 0 0-1.54-1.536h-3.63a56.08 56.08 0 0 1-2.13-5.94l-.105-.353h.54c.847 0 1.534-.69 1.534-1.54s-.688-1.54-1.533-1.54H20.57c-.993-4.086-1.7-8.49-2.215-13.802h.725a1.54 1.54 0 0 0 1.53-1.542 1.54 1.54 0 0 0-1.183-1.497v-3.21c0-.85-.687-1.542-1.53-1.542h-.585V1.537a1.54 1.54 0 1 0-3.075 0v2.897h-.52c-.845 0-1.53.69-1.53 1.54V9.17a1.542 1.542 0 0 0-1.247 1.513c0 .85.687 1.542 1.53 1.542h.726c-.517 5.313-1.224 9.718-2.214 13.802h-1.25c-.846 0-1.532.69-1.532 1.54s.687 1.54 1.53 1.54h.43l-.105.355a56.708 56.708 0 0 1-2.13 5.938h-3.63a1.54 1.54 0 0 0-1.544 1.537c0 .85.693 1.54 1.544 1.54h2.192c-1.703 3.33-3.748 6.316-6.083 8.883-.57.625-.53 1.6.088 2.175.6.555 1.614.514 2.168-.09 2.853-3.135 5.29-6.824 7.245-10.97h11.74c1.96 4.15 4.398 7.84 7.248 10.972.29.314.7.496 1.127.496.386 0 .755-.146 1.036-.408a1.548 1.548 0 0 0 .095-2.174zm-15.9-39.15v-.694h1.115v.695h-1.115zm-1.116 17.817c.666-2.857 1.21-5.923 1.644-9.29.435 3.364.976 6.428 1.642 9.29h-3.286zm-.785 3.08h4.857A60.86 60.86 0 0 0 20.31 35.4h-9.07a61.7 61.7 0 0 0 1.75-5.057c.124-.41.244-.823.357-1.236z"></path>
          </g>
        </symbol>
        <symbol viewBox="0 0 16.078 11.979" id="next">
          <path fill="currentColor" d="M10.057 3.98H0V8h10.057v3.98l6.02-5.998L10.058 0z"></path>
          <path fill="currentColor"
                d="M8.04 38.49c-17.92 0-32.5-14.58-32.5-32.5s14.58-32.5 32.5-32.5 32.5 14.58 32.5 32.5-14.58 32.5-32.5 32.5zm0-61c-15.717 0-28.5 12.785-28.5 28.5 0 15.714 12.783 28.5 28.5 28.5 15.714 0 28.5-12.785 28.5-28.5s-12.788-28.5-28.5-28.5z"></path>
        </symbol>
        <symbol viewBox="0 0 54 54.209" id="office-btn-email">
          <path clipRule="evenodd" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"
                d="M27 2c13.807 0 25 11.24 25 25.105C52 40.97 40.807 52.21 27 52.21S2 40.97 2 27.104 13.193 2 27 2z"></path>
          <path fill="currentColor"
                d="M20.457 33.632c-.246 0-.48-.102-.692-.317-.21-.232-.265-.53-.265-.743V21.647c0-.338.09-.58.27-.78a.93.93 0 0 1 .688-.29h13.02c.218 0 .525.09.706.288.21.26.316.51.316.782V32.57c0 .24-.12.51-.316.754-.186.204-.5.308-.705.308H20.456zm.982-2.16h11.12V23.55l-5.064 5.818a.727.727 0 0 1-.485.16c-.228 0-.387-.046-.52-.158l-5.05-5.82v7.922zm5.56-3.98l3.9-4.755h-7.847L27 27.492z"></path>
        </symbol>
        <symbol viewBox="0 0 54 54.21" id="office-btn-map">
          <path clipRule="evenodd" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"
                d="M27 2c13.807 0 25 11.24 25 25.105S40.807 52.21 27 52.21 2 40.97 2 27.105 13.193 2 27 2z"></path>
          <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                d="M27.5 19.07c-3.584 0-6.5 2.843-6.5 6.336 0 1.45.94 3.488 2.88 6.226 1.35 1.906 2.68 3.434 2.735 3.498l.885 1.014.885-1.014a48.06 48.06 0 0 0 2.736-3.498c1.94-2.737 2.882-4.774 2.882-6.226 0-3.493-2.916-6.335-6.502-6.335zm0 13.435c-1.945-2.405-4.145-5.673-4.145-7.1 0-2.182 1.86-3.958 4.145-3.958s4.145 1.776 4.145 3.96c0 1.425-2.2 4.693-4.145 7.098zm-.004-8.825a1.46 1.46 0 0 0-1.455 1.466c0 .81.65 1.465 1.456 1.465.8 0 1.453-.655 1.453-1.464a1.46 1.46 0 0 0-1.454-1.466z"></path>
        </symbol>
        <symbol viewBox="0 0 54 54.21" id="office-btn-phone">
          <path fill="currentColor"
                d="M23.644 36.74c-2.59-.575-3.46-2.847-3.628-3.607-.047-.238-.92-3.687 2.856-9.58 3.053-4.748 7.08-5.976 7.855-6.15.754-.187 2.716-.308 4.663 2.088.25.29.446.924.31 1.124-.055.08-3.266 2.956-3.374 3.027-.11.073-.218.146-.34.15-.17.03-.414-.05-.7-.245-.283-.195-.588-.405-.83-.66a7.48 7.48 0 0 0-.814-.646c-.284-.196-.494-.28-.63-.258-.388.087-1.72.64-3.376 3.468-1.644 2.808-2.026 4.07-2.055 4.2a.716.716 0 0 0-.013.283c.026.136.188.335.467.497.284.195 1.524.782 1.796.998.284.195.447.395.48.564a.99.99 0 0 1-.015.372c-.02.162-1.443 4.178-1.498 4.258-.162.24-.8.214-1.153.118"></path>
          <path clipRule="evenodd" fill="none" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"
                d="M27 2c13.807 0 25 11.24 25 25.105S40.807 52.21 27 52.21 2 40.97 2 27.105 13.193 2 27 2z"></path>
        </symbol>
        <symbol viewBox="0 0 5.953 7.969" id="pause">
          <g fill="currentColor">
            <path d="M0 0h1.953v7.97H0zM4 0h1.953v7.97H4z"></path>
          </g>
        </symbol>
        <symbol viewBox="0 0 107.423 21.25" id="pellmell">
          <g fill="currentColor">
            <path
              d="M0 20.75V1.9h7.5c2.117 0 3.788.513 5.013 1.538C13.74 4.463 14.35 6.018 14.35 8.1c0 4.268-2.225 6.4-6.674 6.4H4.9v6.25H0zm4.9-14.9v4.7h.825c.466 0 .82-.004 1.062-.013.24-.008.55-.054.925-.137.375-.084.654-.2.838-.35.183-.15.346-.375.488-.675S9.25 8.7 9.25 8.25c0-.467-.066-.854-.2-1.162-.133-.31-.29-.546-.475-.713-.183-.166-.454-.287-.812-.362s-.667-.12-.925-.138c-.26-.017-.63-.025-1.112-.025H4.9zM29.6 14.625v.475h-9.575c0 1.9.95 2.85 2.85 2.85.984 0 1.71-.39 2.176-1.174h4.376c-.35 1.434-1.134 2.524-2.35 3.274-1.217.75-2.61 1.125-4.176 1.125-2.2 0-3.987-.6-5.362-1.8s-2.062-2.875-2.062-5.025c0-2.116.654-3.787 1.963-5.012C18.744 8.112 20.457 7.5 22.574 7.5c2.216 0 3.94.638 5.175 1.912 1.233 1.276 1.85 3.013 1.85 5.213zm-9.5-2.15h5.275c-.117-.6-.417-1.087-.9-1.462s-1.042-.563-1.675-.563c-.684 0-1.27.175-1.763.524-.49.35-.804.85-.937 1.5zM36.225 0v20.75h-4.55V0h4.55zM43.774 0v20.75h-4.55V0h4.55zM45.75 20.75l3.2-18.85h4.824L57.6 11.975 61.65 1.9h4.874l2.85 18.85h-4.9L63.1 9.9h-.05l-4.525 10.85h-1.95L52.25 9.9h-.05l-1.576 10.85H45.75zM84.523 14.625v.475h-9.575c0 1.9.95 2.85 2.85 2.85.984 0 1.71-.39 2.176-1.174h4.375C84 18.21 83.214 19.3 82 20.05c-1.218.75-2.61 1.125-4.177 1.125-2.2 0-3.987-.6-5.362-1.8S70.4 16.5 70.4 14.35c0-2.116.653-3.787 1.962-5.012C73.67 8.112 75.382 7.5 77.5 7.5c2.215 0 3.94.638 5.174 1.912 1.233 1.276 1.85 3.013 1.85 5.213zm-9.5-2.15h5.275c-.117-.6-.417-1.087-.9-1.462s-1.042-.562-1.675-.562c-.684 0-1.27.176-1.763.525-.49.35-.803.85-.937 1.5zM91.148 0v20.75h-4.55V0h4.55zM98.698 0v20.75h-4.55V0h4.55zM102.423 16.25c.566-.566 1.26-.85 2.075-.85s1.51.283 2.075.85.85 1.26.85 2.075c0 .8-.283 1.487-.85 2.062s-1.26.862-2.075.862-1.51-.288-2.075-.863-.85-1.263-.85-2.062c0-.816.283-1.51.85-2.075z"></path>
          </g>
        </symbol>
        <symbol viewBox="0 0 303.312 60" id="pellmellbig">
          <g fill="currentColor">
            <path
              d="M0 58.588V5.364h21.177c5.978 0 10.695 1.448 14.153 4.342 3.46 2.895 5.19 7.282 5.19 13.164 0 12.05-6.285 18.072-18.848 18.072h-7.836V58.59H0zm13.836-42.07v13.27h2.33c1.315 0 2.316-.01 3-.036.682-.022 1.553-.152 2.61-.386 1.06-.237 1.85-.565 2.367-.99.516-.422.976-1.06 1.376-1.905.398-.846.597-1.904.597-3.176 0-1.318-.188-2.41-.562-3.28-.378-.872-.825-1.542-1.343-2.014-.52-.47-1.282-.81-2.294-1.023-1.012-.212-1.883-.342-2.61-.39-.73-.046-1.776-.07-3.142-.07h-2.33zM83.575 41.294v1.34H56.54c0 5.366 2.683 8.05 8.048 8.05 2.776 0 4.823-1.107 6.14-3.318h12.355c-.987 4.048-3.202 7.128-6.635 9.246-3.436 2.118-7.367 3.176-11.79 3.176-6.21 0-11.258-1.693-15.14-5.082-3.883-3.39-5.825-8.118-5.825-14.19 0-5.974 1.848-10.692 5.542-14.15 3.692-3.46 8.528-5.19 14.506-5.19 6.258 0 11.13 1.802 14.612 5.4 3.483 3.6 5.223 8.506 5.223 14.718zm-26.823-6.07h14.896c-.33-1.694-1.178-3.07-2.543-4.13-1.365-1.058-2.94-1.587-4.73-1.587-1.93 0-3.59.494-4.976 1.48-1.388.99-2.27 2.402-2.648 4.236zM102.28 0v58.588H89.436V0h12.846zM123.6 0v58.588H110.75V0H123.6zM129.174 58.588l9.036-53.224h13.623l10.8 28.446L174.07 5.364h13.764l8.047 53.224h-13.833l-3.883-30.634h-.14l-12.778 30.634h-5.506l-12.213-30.634h-.14l-4.448 30.634h-13.766zM238.654 41.294v1.34h-27.036c0 5.366 2.684 8.05 8.05 8.05 2.776 0 4.82-1.107 6.14-3.318h12.354c-.987 4.048-3.2 7.128-6.635 9.246-3.436 2.118-7.367 3.176-11.79 3.176-6.21 0-11.26-1.693-15.14-5.082-3.884-3.39-5.824-8.118-5.824-14.19 0-5.974 1.847-10.692 5.542-14.15 3.692-3.46 8.528-5.19 14.507-5.19 6.256 0 11.128 1.802 14.61 5.4 3.483 3.6 5.222 8.506 5.222 14.718zm-26.823-6.07h14.896c-.33-1.694-1.177-3.07-2.542-4.13-1.364-1.058-2.942-1.587-4.73-1.587-1.93 0-3.59.494-4.977 1.48-1.386.99-2.27 2.402-2.646 4.236zM257.36 0v58.588h-12.847V0h12.847zM278.677 0v58.588H265.83V0h12.847zM289.194 45.882c1.6-1.6 3.554-2.4 5.86-2.4 2.304 0 4.26.8 5.858 2.4 1.6 1.6 2.398 3.554 2.398 5.86 0 2.257-.8 4.2-2.398 5.823-1.6 1.624-3.555 2.435-5.86 2.435s-4.26-.81-5.858-2.435c-1.6-1.624-2.4-3.565-2.4-5.824 0-2.303.8-4.26 2.4-5.858z"></path>
          </g>
        </symbol>
        <symbol viewBox="0 0 5.984 12" id="play">
          <path fill="currentColor" d="M5.984 6L0 0v12"></path>
        </symbol>
        <symbol viewBox="0 0 10.958 20" id="playbig">
          <path fill="currentColor" d="M0 20V0h1.958l9 9.958-9 10.042z"></path>
          <path fill="currentColor"
                d="M3.883 42.5c-17.92 0-32.5-14.578-32.5-32.5 0-17.92 14.58-32.5 32.5-32.5s32.5 14.58 32.5 32.5c0 17.922-14.58 32.5-32.5 32.5zm0-61c-15.716 0-28.5 12.785-28.5 28.5 0 15.714 12.784 28.5 28.5 28.5 15.715 0 28.5-12.785 28.5-28.5 0-15.714-12.787-28.5-28.5-28.5z"></path>
        </symbol>
        <symbol viewBox="0 0 16.078 11.979" id="previous">
          <path fill="currentColor" d="M6.02 8H16.08V3.98H6.02V0L0 5.998l6.02 5.98z"></path>
        </symbol>
        <symbol viewBox="0 0 11.979 24.08" id="scrolldown">
          <path fill="currentColor" d="M8 18.06V0H3.98v18.06H0l5.998 6.02 5.98-6.02z"></path>
        </symbol>
      </svg>
    );
  }
}