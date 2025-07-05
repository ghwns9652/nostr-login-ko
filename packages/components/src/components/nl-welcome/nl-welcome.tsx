import { Component, Fragment, h, Prop } from '@stencil/core';
import { CURRENT_MODULE } from '@/types';
import { state } from '@/store';

@Component({
  tag: 'nl-welcome',
  styleUrl: 'nl-welcome.css',
  shadow: false,
})
export class NlWelcome {
  @Prop() titleWelcome = '환영합니다!';
  @Prop() description = '이 웹사이트는 Nostr 네트워크의 일부입니다. 이미 가지고 있는 Nostr 계정을 사용해서 로그인하거나 새로 계정을 생성하세요.';

  handleChangeScreen(screen) {
    state.path = [...state.path, screen];
  }

  render() {
    return (
      <Fragment>
        <div class="p-4 overflow-y-auto">
          <h1 class="nl-title font-bold text-center text-4xl">{this.titleWelcome}</h1>
          <p class="nl-description font-light text-center text-lg pt-2 max-w-96 mx-auto">{this.description}</p>
        </div>

        <div class="max-w-52 mx-auto pb-5">
          <div class="flex gap-3 flex-col mb-2">
            <button-base titleBtn="로그인" onClick={() => this.handleChangeScreen(CURRENT_MODULE.WELCOME_LOGIN)}>
              <svg style={{ display: 'none' }} slot="icon-start" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
            </button-base>
          </div>

          {/* <div class="nl-divider py-3 flex items-center text-xs uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t  after:ms-6">Or</div> */}

          <button-base onClick={() => this.handleChangeScreen(CURRENT_MODULE.WELCOME_SIGNUP)} titleBtn="계정 생성">
            <svg style={{ display: 'none' }} slot="icon-start" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </button-base>
        </div>
      </Fragment>
    );
  }
}
