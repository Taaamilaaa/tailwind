import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* ABOUT */}
      <div className="grow  mt-[81]">
        <div className="mx-auto  max-w-[1320px]  pb-[100px] pt-[75px] px-[calc(1.5rem*.5)]">
          <section>
            <h1 className="text-center font-bold text-3xl mb-2 mt-0 leading-[1.2] text-maastrich-blue text-[2.5rem]">
              <span className="text-[transparent] bg-clip-text bg-orange-yellow bg-[url('/image/text-bg.430bbda6b4ee4bfd7337.svg')] bg-[50%] bg-[length:620px_230px]">
                About
              </span>{" "}
              us
            </h1>
            <p className="text-center text-lg font-light max-w-[743px] mx-auto my-0">
              Jewish ethics, morals and values have shaped and refined
              individuals, nations and societies throughout the generations.
              However, many Jews today have never had the opportunity to explore
              Jewish ethics, morals and values in a mature and sophisticated
              way.
            </p>
          </section>

          <section className="pt-5 block">
            <div className="flex items-end bg-[50%] bg-no-repeat bg-[100%] max-w-[795px] min-h-[280px] justify-between mx-auto my-0 bg-[url('/image/about-bg.aeeffab48eda092e2d33.svg')]">
              <div className="shrink-0 h-[213px] w-[213px] relative after:content-[''] after:border-[1px] after:border-solid after:border-black after:rounded-[50%] after:h-[213px] after:left-[-10px] after:absolute after:top-[-8px] after:w-[213px] after:z-[-1]">
                <img
                  className="bg-bright-grey rounded-[50%] block h-full object-cover object-center max-w-full align-middle ]"
                  src="./image/left-img.2d18dc031ace3a28fb3a.jpg"
                  alt=""
                ></img>
              </div>
              <div className="self-start flex h-[187px] m-o max-w-[205px] relative text-center w-full after:content-[''] after:bg-[url('/image/Без названия.svg')] after:bg-[50%] after:bg-no-repeat after:bg-contain after:h-[187px] after:inset-3.5 after:absolute after:top-[9px] after:w-[205px] after:z-[-1] after:text-center">
                <img
                  className="object-cover w-full align-middle text-center clip-path-url-['./image/Без названия.svg'] "
                  src="./image/middle-img.ade01211d2c24192a33d.jpg"
                  alt=""
                ></img>
                <svg className="block align-middle " width="0" height="0">
                  <defs>
                    <clipPath id="triangle">
                      <path d="M75.0743 11.5441C82.2676 -2.04728 101.469 -2.77459 109.67 10.2337L202.237 157.065C210.919 170.837 200.387 188.659 184.134 187.696L19.0373 177.907C4.50898 177.046 -4.26389 161.45 2.54408 148.586L75.0743 11.5441Z"></path>
                    </clipPath>
                    <clipPath id="triangleMob">
                      <path d="M33.7077 6.27204C37.3044 -0.523654 46.905 -0.887296 51.0054 5.61686L91.5291 69.8961C95.8704 76.7823 90.6041 85.6934 82.4779 85.2116L10.2022 80.9263C2.93807 80.4956 -1.44835 72.6977 1.95563 66.266L33.7077 6.27204Z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex h-[218px] mx-0 mt-0 mb-[7px] max-w-[207px] relative text-center w-full after:block after:content-[''] after:bg-[url('/image/Без названия (1)')] after:bg-[50%] after:bg-no-repeat after:bg-contain after:h-full after:left-[-7px] after:absolute after:top-[3px] after:w-full after:z-[-1] after:text-center">
                <img
                  className="object-cover object-[-95px] max-w-full text-center clip-path-url-['/image/Без названия (1).svg']"
                  src="./image/right-img.392f6273f17e8367e71e.jpg"
                  alt=""
                ></img>
                <svg className="align-middle " width="0" height="0">
                  <defs>
                    <clipPath id="border">
                      <path d="M189.951 54.0643C186.942 31.2167 168.707 13.3847 145.798 10.8868L55.5114 1.04257C25.9272 -2.18309 0.0918732 20.9885 0.0918732 50.748V156.386C0.0918732 186.609 26.6997 209.923 56.6615 205.952L157.797 192.547C185.156 188.921 204.403 163.815 200.8 136.453L189.951 54.0643Z"></path>
                    </clipPath>
                    <clipPath id="borderMob">
                      <path d="M86.2686 20.0312C85.366 13.1769 79.8956 7.82732 73.0228 7.07797L17.0657 0.976772C8.19039 0.00907344 0.439804 6.96054 0.439804 15.8884V81.7203C0.439804 90.7874 8.42214 97.7816 17.4107 96.5902L80.1386 88.2762C88.3462 87.1884 94.1203 79.6564 93.0394 71.4479L86.2686 20.0312Z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </section>

          <section className="block">
            <div className="flex flex-wrap mx-[calc(1.5rem*(-.5))] mt-[calc(0rem*(-1))]">
              <div className="grow-0 shrink-0 basis-auto w-1/2 mt-0 max-w-full px-[calc(1.5rem*(.5))]">
                <div className="mt-[75px] gap-x-7 flex">
                  <div className="items-center bg-cosmic-latte rounded-[10px] flex grow-0 shrink-0 basis-[75px] h-[75px] justify-center">
                    <span className="text-[40px] font-normal not-italic normal-nums leading-none normal-case before:content-['?'] before:text-[40px] before:not-italic before:normal-nums before:font-normal before:leading-none before:normal-case"></span>
                  </div>
                  <div className="">
                    <h4 className="text-maastrich-blue text-[20px] font-semibold leading-[30px] mb-2">
                      Why are we running Podcast Fellowship?
                    </h4>
                    <p className="text-[15px] font-light leading-[25px] my-0">
                      The Podcast Fellowship provides this opportunity for
                      mature exploration. By running Podcast Fellowship we seek
                      to give all Jews access to timeless Jewish wisdom.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" grow-0 shrink-0 basis-auto w-1/2 mt-0 max-w-full px-[calc(1.5rem*.5)]">
                <div className="mt-[75px] gap-x-7 flex">
                  <div className="items-center bg-cosmic-latte rounded-[10px] flex grow-0 shrink-0 basis-[75px] h-[75px] justify-center">
                    <span className="text-[40px] font-normal not-italic normal-nums leading-none normal-case before:content-['?'] before:text-[40px] before:not-italic before:normal-nums before:font-normal before:leading-none before:normal-case"></span>
                  </div>
                  <div className="">
                    <h4 className="text-maastrich-blue text-[20px] font-semibold leading-[30px] mb-2">
                      What is the Podcast Fellowship?
                    </h4>
                    <p className="text-[15px] font-light leading-[25px] my-0">
                      The Podcast Fellowship is a paid educational framework
                      aiming to empower its participants with Jewish literacy.
                      The Fellowship allows advancement through the material at
                      one’s own pace, based on one’s own unique interests and
                      background.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-1/2 mt-0 max-w-full px-[calc(1.5rem*.5)]">
                <div className="mt-[75px] gap-x-7 flex">
                  <div className="items-center bg-cosmic-latte rounded-[10px] flex grow-0 shrink-0 basis-[75px] h-[75px] justify-center">
                    <span className="text-[40px] font-normal not-italic normal-nums leading-none normal-case before:content-['?'] before:text-[40px] before:not-italic before:normal-nums before:font-normal before:leading-none before:normal-case"></span>
                  </div>
                  <div className="">
                    <h4 className="text-maastrich-blue text-[20px] font-semibold leading-[30px] mb-2">
                      Who is Podcast Fellowship for?
                    </h4>
                    <p className="text-[15px] font-light leading-[25px] my-0">
                      The Podcast Fellowship is for Jewish college-aged students
                      and young professionals with limited or no Jewish
                      educational background who would like to enhance their
                      life and ability to represent Judaism and Jewish values.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-1/2 mt-0 max-w-full px-[calc(1.5rem*.5)]">
                <div className="mt-[75px] gap-x-7 flex">
                  <div className="items-center bg-cosmic-latte rounded-[10px] flex grow-0 shrink-0 basis-[75px] h-[75px] justify-center">
                    <span className="text-[40px] font-normal not-italic normal-nums leading-none normal-case before:content-['?'] before:text-[40px] before:not-italic before:normal-nums before:font-normal before:leading-none before:normal-case"></span>
                  </div>
                  <div className="">
                    <h4 className="text-maastrich-blue text-[20px] font-semibold leading-[30px] mb-2">
                      Why become a Podcast Fellow?
                    </h4>
                    <p className="text-[15px] font-light leading-[25px] my-0">
                      Become a Podcast Fellow if you are interested in advancing
                      your Jewish literacy and earning a generous stipend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* DONATE */}
      <div className="mt-[81px] min-h-[670px] relative grow">
        <div className="relative max-w-[1320px] mx-auto px-[calc(1.5rem*.5)]">
          <section className="block">
            <div className="flex flex-wrap mx-[calc(1.5*(-.5))] mt-[calc(0*(-1))]">
              <div className="py-[75px] px-0 grow-0 shrink-0 basis-auto w-1/2 mt-0 max-w-full">
                <div className="mb-[50px] max-w-[440px] pt-[60px]">
                  <h1 className="text-maastrich-blue leading-[62px] mb-[25px] mt-0 font-bold text-[2.5rem]">
                    Inspire The <br />
                    <span className="text-[transparent] bg-clip-text bg-orange-yellow bg-[url('/image/text-bg.430bbda6b4ee4bfd7337.svg')] bg-[50%] bg-[length:620px_230px] text-center">
                      Jewish Future
                    </span>
                  </h1>
                  <p className="text-[18px] font-light leading-[28px] mb-[25px] nt-0">
                    Donate to the Podcast Fellowship today.
                  </p>
                  <p className="text-[14px] leading-[24px] mb-[5px] mt-0 font-light">
                    Podcast Fellowship is a 501(c)3 tax-exempt organization, Tax
                    ID #083-094766.
                  </p>
                  <p className="text-[14px] leading-[24px] mb-[5px] mt-0 font-light">
                    Your donation is tax-deductible in the United States.
                  </p>
                </div>
                <div className="items-center flex flex-wrap mx-[calc(1.5rem*(-.5))] mt-[calc(0*(-1))]">
                  <div className="grow-0 shrink-0 basis-auto w-auto mt-0 max-w-full px-[calc(1.5rem)*.5]">
                    or
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-[41.66666667%] mt-0 max-w-full px-[calc(1.5rem*.5)]">
                    <a
                      className="items-center bg-effervescent-blue border-0 rounded-[1000px] cursor-pointer flex 
                      text-[18px] font-light h-[64px] leading-[18px] max-w-[208px] outline-[none] pl-[25px] pr-[17px] 
                      relative w-full decoration-[none] text-deep-sky-blue before:content-[''] before:w-[261px]
                       before:h-[64px] before:border before:border-solid before:border-[#000] before:rounded-[inherit] 
                       before:absolute before:right-[-4px] before:top-[6px] before:translate-[0]  before:w-[inherit] before:z-[-1]
                       before:transition-transform before:ease-in-out  before:duration-[.2s] hover:before:right-[0px] hover:before:top-[0px]"
                      href=""
                      target="_blank"
                    >
                      <p className="text-[#fff] grow-1 leading-[25px] my-0 text-center">
                        Donate via Paypal
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-1/2 mt-0 max-w-full px-[calc(1.5rem*(.5))]">
                <div
                  id="kindful-donate-form-00d0f2b3-2fb6-4719-9960-2253640f37e7"
                  className="h-[1000px] my-0 mx-auto left-[calc(100vw - 67%)] max-h-[600px] overflow-y-auto absolute top-[10%] w-[367px]"
                >
                  {/* <iframe
                    title="kindful-donation-form"
                    src=""
                    id="kindful-iframe"
                  ></iframe> */}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-full absolute right-[0] top-[0] before:content-[''] before:bg-[url('/image/slider-home-bg.f32f7170ec88e387d7b5.svg')] before:bg-no-repeat before:bg-cover before:h-[200px] before:absolute before:w-[190px] before:z-[-1] before:left-[-140px] before:top-[30px] after:content-[''] after:bg-[url('/image/slider-home-bg.f32f7170ec88e387d7b5.svg')] after:bg-no-repeat after:bg-cover after:h-[200px] after:w-[190px] after:absolute after:z-[-1] after:bottom-[50px] after:left-[-120px]">
          <img
            src="/image/donate_girl.0d46c8f24bdd2e9064cace9a356c81c8.svg"
            alt="NO IMAGE"
          ></img>
        </div>
      </div>
      {/* POPUP */}

      <div className="opacity-100 mt-0 leading-6 font-light text-[14px] text-black-lacquer" >
        <div className="shadow-[0_3px_5px_2px_rgba(0,0,0,0.3)_inset_0_1px_0_0_rgba(255,255,255,0.65)] overflow-auto bg-white w-[350px] mx-auto my-0 relative rounded-[6px] table py-[15px] before:content-[''] before:table before:overflow-hidden before:invisible before:text-0 before:leading-[0] before:w-0 before:h-0">
          <div className="absolute top-[10px] right=[10px] z-[9999] w-[17px] cursor-pointer" onclick="closeModal();"></div>
          <div className="clear-both w-full before:content-['.'] before:block before:overflow-hidden before:invisible before:text-[0px] before:leading-[0px] before:w-[0px] before:h-[0px] after:content-['.'] after:block after:overflow-hidden after:invisible after:text-[0px] after:leading-[0px] after:w-o after:h-0">
            <img className="h-[38px] w-[38px] block mt-[15px] mb-[0px] mx-auto"
              src="/image/standard_favicon.png"
              alt="Standard favicon"
            ></img>
          </div>

          <div className="mt-[15px] mb-0 px-[30px]">
            <h4 className="">The Podcast Fellowship</h4>
          </div>

          <div className="">
            <p className="">
              Your donation fuels the success of our rapidly-growing, flexible,
              innovative educational model!
            </p>
          </div>

          <div className="" id="step1" 
          // style=""
          >
            <div className="">
              <h5 className="">Choose your Amount</h5>
              <ul className="">
                <fieldset>
                  <li className="">
                    <input
                      type="radio"
                      name="amount"
                      id="amount_36"
                      value="36"
                      checked="checked"
                    />
                    <label for="amount_36" className="">
                      <div className="">$36</div>
                    </label>{" "}
                  </li>
                  <li className="">
                    <input
                      type="radio"
                      name="amount"
                      id="amount_72"
                      value="72"
                    />
                    <label for="amount_72">
                      <div className="">$72</div>
                    </label>{" "}
                  </li>
                  <li className="">
                    <input
                      type="radio"
                      name="amount"
                      id="amount_100"
                      value="100"
                    />
                    <label for="amount_100">
                      <div className="">$100</div>
                    </label>{" "}
                  </li>
                  <li className="" id="other-label">
                    <input
                      type="radio"
                      name="amount"
                      id="amount_other"
                      value="other"
                    />
                    <label for="amount_other">
                      <div className="">Other</div>
                    </label>{" "}
                  </li>
                </fieldset>
              </ul>
              <div className=""
              //  style="display: none;"
               >
                <span className="">$</span>
                <span id="other-amount-input"></span>
              </div>
            </div>

            <div className="">
              <div className="">
                <input
                  id="cover_transaction_fee"
                  className=""
                  type="checkbox"
                  value="1"
                  name="cover_transaction_fee"
                />
                <label
                  for="cover_transaction_fee"
                  id="cover-transaction-fee-label"
                  className=""
                >
                  <span className="">cover processing fee</span>
                </label>
                <span for="cover_transaction_fee" id="pseudo-label"></span>
                <span
                  className=""
                  data-currency-symbol="$"
                >
                  I'll cover the{" "}
                  <span className="">$1.04</span>
                  processing fee.
                </span>
              </div>

              <input
                type="hidden"
                id="embed_percent_to_cover_transaction_fee"
                value="2.9"
              />

              <div className="">
                <ul className="">
                  <fieldset>
                    <li className="">
                      <input
                        type="radio"
                        name="frequency"
                        id="frequency_One_Time_Donation"
                        value="One Time Donation"
                        checked="checked"
                      />
                      <label className="" for="frequency_One_Time_Donation">
                        <div className="">One Time</div>
                      </label>{" "}
                    </li>
                    <li className="">
                      <input
                        type="radio"
                        name="frequency"
                        id="frequency_36"
                        value="36"
                      />
                      <label for="frequency_36">
                        <div className="">Monthly</div>
                      </label>{" "}
                    </li>
                  </fieldset>
                </ul>
              </div>
              <a className="">
                Continue <i className="" aria-hidden="true"></i>
              </a>
              <div id="powered-by">
                <small>
                  <i className=""></i>Securely processed by{" "}
                  <a target="_blank" href="https://www.kindful.com/">
                    <img
                      alt="Kindful"
                      src="/assets/kindful-small-c874e16e72e31025afd05d99b17f5af248757eb3a76b612a74f6a15c2e11ba42.png"
                    />
                  </a>
                </small>
              </div>
            </div>
          </div>

          <div className="" id="step2"
          //  style="display: none;"
           >
            <span className="" data-step="2">
              <i className="" aria-hidden="true"></i>
            </span>
            <br />
            <h5 className="">Additional Information</h5>
            <div className=""></div>
            <div className="">
              <a className="">
                Continue <i className="" aria-hidden="true"></i>
              </a>
              <div id="powered-by">
                <small>
                  <i className=""></i>Securely processed by{" "}
                  <a target="_blank" href="https://www.kindful.com/">
                    <img
                      alt="Kindful"
                      src="/assets/kindful-small-c874e16e72e31025afd05d99b17f5af248757eb3a76b612a74f6a15c2e11ba42.png"
                    />
                  </a>
                </small>
              </div>
            </div>
          </div>

          <div className="" id="step3" 
          // style="display: none; opacity: 1;"
          >
            <div className="">
              <span className="" data-step="3">
                <i className="" aria-hidden="true"></i>
              </span>
              <br />
              <div
                className=""
                // style="display: none; visibility: hidden;"
              >
                <ul className="" 
                // style="margin-bottom:15px;"
                >
                  <input
                    type="radio"
                    name="payment_method"
                    className=""
                    value="credit_card"
                    checked=""
                  />
                </ul>
              </div>

              <h5 className="">
                <b>Enter your payment method</b>
              </h5>

              <div className="" 
              // style="display: none;"
              >
                <div className="">
                  <div className="">
                    <label for="credit_card_number" className="visuallyhidden">
                      credit card number
                    </label>
                    <div
                      id="credit_card_number_div"
                      data-placeholder-text="Credit Card Number"
                    ></div>
                    <i className="" aria-hidden="true"></i>
                  </div>

                  <div className="">
                    <label for="credit_card_month" className="">
                      expiration month
                    </label>
                    <input
                      type="text"
                      name="credit_card[month]"
                      id="credit_card_month"
                      placeholder="MM"
                      maxlength="2"
                      pattern="[0-9]*"
                      className=""
                    />
                    <i className="" aria-hidden="true"></i>
                    <span className="">/</span>
                  </div>

                  <div className="">
                    <label for="credit_card_year" className="">
                      expiration year
                    </label>
                    <input
                      type="text"
                      name="credit_card[year]"
                      id="credit_card_year"
                      placeholder="YYYY"
                      maxlength="4"
                      pattern="[0-9]*"
                      className=""
                    />
                  </div>

                  <div className="">
                    <label for="credit_card_cvv" className="">
                      cvv
                    </label>
                    <div id="cvv_number_div" data-placeholder-text="CVV"></div>
                    <i className="" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="">
                  <label
                    for="billing_address_postal_code"
                    className=""
                  >
                    postal code
                  </label>
                  <input
                    type="text"
                    name="billing_address[postal_code]"
                    id="billing_address_postal_code"
                    placeholder="Postal Code"
                    className=""
                  />
                  <i className="" aria-hidden="true"></i>
                </div>
              </div>

              <div className="" 
              // style="display:none"
              >
                <div className="">
                  <h2 className="">Bank Account Details</h2>
                </div>

                <div className="">
                  <label for="bank_account_account_type" className="">
                    account type
                  </label>
                  <select
                    name="bank_account[account_type]"
                    id="bank_account_account_type"
                    className=""
                  >
                    <option value="">Account Type</option>
                    <option value="savings">Savings</option>
                    <option value="checking">Checking</option>
                  </select>
                  <i className="" aria-hidden="true"></i>
                </div>

                <input
                  type="hidden"
                  name="bank_account_name"
                  id="bank_account_name"
                />

                <div className="">
                  <label
                    for="bank_account_routing_number"
                    className=""
                  >
                    routing number
                  </label>
                  <input
                    type="text"
                    name="bank_account[routing_number]"
                    id="bank_account_routing_number"
                    placeholder="Routing Number"
                  />
                  <i className="" aria-hidden="true"></i>
                </div>
                <div className="">
                  <label
                    for="bank_account_account_number"
                    className=""
                  >
                    account number
                  </label>
                  <input
                    type="text"
                    name="bank_account[account_number]"
                    id="bank_account_account_number"
                    placeholder="Account Number"
                  />
                  <i className="" aria-hidden="true"></i>
                </div>

                <div
                  id="bank-account-errors"
                  role="alert"
                  className=""
                ></div>
              </div>

              <div
                className=""
                id="credit_card"
              >
                <div
                  id="card-element"
                  className=""
                >
                  <div
                    className=""
                    // style="margin: 0px !important; padding: 0px !important; border: none !important; display: block !important; background: transparent !important; position: relative !important; opacity: 1 !important;"
                  >
                    <iframe
                      name="__privateStripeFrame0186"
                      frameborder="0"
                      allowtransparency="true"
                      scrolling="no"
                      role="presentation"
                      allow="payment *"
                      // src="https://js.stripe.com/v3/elements-inner-card-13f4337b2547700e20ce89722227591c.html#wait=false&amp;mids[guid]=NA&amp;mids[muid]=NA&amp;mids[sid]=NA&amp;hidePostalCode=true&amp;style[base][iconColor]=%23F99A52&amp;style[base][color]=%2332315E&amp;style[base][fontWeight]=400&amp;style[base][fontFamily]=%22Helvetica+Neue%22%2C+%22Helvetica%22%2C+sans-serif&amp;style[base][fontSize]=15px&amp;style[base][::placeholder][color]=%23CFD7DF&amp;rtl=false&amp;componentName=card&amp;keyMode=live&amp;apiKey=pk_live_51KYf2iLfM5RJtUWWDXUtRkyW8lDzanR3bMjbdi7rlYKjE2hk5JQOm9go5B9BMMycg9smmSQZZoOgg9RDsYq9IPAx00gVtANgK1&amp;referrer=https%3A%2F%2Fpodcastfellowship.kindful.com%2Fembeds%2F00d0f2b3-2fb6-4719-9960-2253640f37e7%3Fp%3Dhttps%3A%26embedded%3Dtrue%26full_form%3Dtrue&amp;controllerId=__privateStripeController0181"
                      title="Secure card payment input frame"
                      // style="border: none !important; margin: 0px !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; user-select: none !important; transform: translate(0px) !important; color-scheme: light only !important; height: 18px;"
                    ></iframe>
                    <input
                      className=""
                      aria-hidden="true"
                      aria-label=" "
                      autocomplete="false"
                      maxlength="1"
                      // style="border: none !important; display: block !important; position: absolute !important; height: 1px !important; top: -1px !important; left: 0px !important; padding: 0px !important; margin: 0px !important; width: 100% !important; opacity: 0 !important; background: transparent !important; pointer-events: none !important; font-size: 16px !important;"
                    />
                  </div>
                </div>
              </div>
              <div
                className=""
                // style="display: none; visibility: hidden;"
              >
                <ul className="" 
                // style="margin-bottom:15px;"
                >
                  <input
                    type="radio"
                    name="contact_type"
                    className=""
                    value="person"
                    checked=""
                  />
                </ul>
              </div>

              <h5 className="">
                <strong>Billing details</strong>
              </h5>

              <div className="">
                <ul className="">
                  <fieldset>
                    <li className="">
                      <input
                        type="radio"
                        name="donor_type"
                        id="donor_type_Person"
                        value="Person"
                        checked="checked"
                      />
                      <label className="" for="contact_type_">
                        <div className="">Individual</div>
                      </label>{" "}
                    </li>
                    <li className="">
                      <input
                        type="radio"
                        name="donor_type"
                        id="donor_type_Organization"
                        value="Organization"
                      />
                      <label for="contact_type_">
                        <div className="">Organization</div>
                      </label>{" "}
                    </li>
                  </fieldset>
                </ul>
              </div>

              <div className=""
              //  style="display:none"
               >
                <div className="">
                  <label for="organization_name" className="">
                    organization name
                  </label>
                  <input
                    type="text"
                    name="organization_name"
                    id="organization_name"
                    maxlength="127"
                    placeholder="Organization Name"
                    className=""
                  />
                  <i className="" aria-hidden="true"></i>
                </div>

                <div className="">
                  <label for="contact_info" className="">
                    primary contact
                  </label>
                  <input
                    type="text"
                    name="contact_info"
                    id="contact_info"
                    maxlength="127"
                    placeholder="Primary Contact"
                    className=""
                  />
                  <i className="" aria-hidden="true"></i>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="">
                    <label for="credit_card_first_name" className="">
                      first name
                    </label>
                    <input
                      type="text"
                      name="credit_card[first_name]"
                      id="credit_card_first_name"
                      maxlength="64"
                      placeholder="First Name"
                      className=""
                    />
                    <i className="" aria-hidden="true"></i>
                  </div>

                  <div className="">
                    <label for="credit_card_last_name" className="">
                      last name
                    </label>
                    <input
                      type="text"
                      name="credit_card[last_name]"
                      id="credit_card_last_name"
                      maxlength="64"
                      placeholder="Last Name"
                      className=""
                    />
                    <i className="" aria-hidden="true"></i>
                  </div>
                </div>
              </div>

              <div className="i">
                <label for="email" className="">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  maxlength="255"
                  className=""
                />
                <i className="" aria-hidden="true"></i>
              </div>

              <div className="">
                <script src="https://www.google.com/recaptcha/api.js?render=explicit&amp;hl=en&amp;onload=recaptchaLoaded"></script>
                <div
                  id="captcha"
                  data-site-key="6Ld0IRgTAAAAAJFGH6tvzEzZYZEBHt9YXeHJ00W7"
                ></div>
              </div>

              <div className=" ">
                <label
                  for="email_opt_in"
                  // style="font-weight: normal; margin-left: 5px;"
                  className=""
                >
                  <input
                    type="checkbox"
                    name="email_opt_in"
                    id="email_opt_in"
                    value="true"
                    // style="float: left; width: 10px; display: inline-block; margin: 3px 10px 0 0;"
                  />
                  Join our email list.
                </label>
              </div>

              <input
                type="hidden"
                name="non_widget_donate"
                id="non_widget_donate"
                value="true"
              />
              <input type="hidden" name="locale" id="locale" value="en" />

              <div className="">
                <div className="" data-button-text="Donate">
                  <label for="submit" className="">
                    submit
                  </label>
                  <button
                    name="button"
                    type="submit"
                    className=""
                    data-disable-with="Please wait..."
                  >
                    <i className=""></i>{" "}
                    <span className="">Donate</span>
                  </button>
                  <div id="authorization-text">
                    <p id="non-recurring-credit-card" 
                    // style="display: none;"
                    >
                      <small>
                        By clicking the button above I agree to submitting
                        payment.
                      </small>
                    </p>
                    <p id="non-recurring-bank-account"
                    //  style="display: none;"
                     >
                      <small>
                        By clicking the button above I authorize Kindful to
                        electronically debit my bank account.
                      </small>
                    </p>
                    <p id="recurring-credit-card"
                    //  style="display: none;"
                     >
                      <small>
                        By clicking the button above I agree to submitting
                        payment and authorize Kindful to use my credit card for
                        future payments. I understand I may cancel this
                        authorization at any time.
                      </small>
                    </p>
                    <p id="recurring-bank-account" 
                    // style="display: none;"
                    >
                      <small>
                        By clicking the button above I authorize Kindful to
                        electronically debit my bank account and use my bank
                        account for future payments. I understand I may cancel
                        this authorization at any time.
                      </small>
                    </p>
                  </div>

                  <div id="powered-by">
                    <small>
                      <i className=""></i>Securely processed by{" "}
                      <a target="_blank" href="https://www.kindful.com/">
                        <img
                          alt="Kindful"
                          src=""
                        />
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
