export const baseURL = 'https://api.bamachoub.com/';

export const menuNames = {
  company: 'شرکت',
  sheetSelect: 'جنس ورق',
  color: 'رنگ',
  dimensionsSelect: 'ابعاد',
  thicknessSelect: 'ضخامت',
  coverSelect: 'نوع رویه',
  quality: 'کیفیت',
  sideSheetType: 'یک یا دو رو',
  numberInPalet: 'تعداد در پالت',
  sheetCountry: 'کشورسازنده ورق',
  coverCountry: 'کشورسازنده رویه',
  density: 'دانسیته',
  weight: 'وزن',
};

export const placeholders = {
  productDesc: 'کالا بدون نام',
  brandName: 'شرکت چوب',
  brandDesc: '-',
  name: 'نام کاربری',
  lipsum:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
};

export const common = {
  // TOAST ERROR
  TOAST_ERR__LOGIN_FIRST: 'ابتدا وارد شوید',
  TOAST_ERR__TRY_AGAIN: 'دوباره تلاش کنید',
  TOAST_ERR__PRICE_CANT_BE_EMPTY: 'این آیتم موجود نمی باشد',
  TOAST_ERR__SOMETHING_WENT_WRONG: 'خطا در ارتباط، مجددا تلاش کنید',
  TOAST_ERR__TRY_AGAIN_OR_RELOGIN:
    'مجددا تلاش کنید، درصورت ادامه داشتن مشکل دوباره وارد شوید',
  TOAST_ERR__LOGIN_INVALID: 'اطلاعات ورود نامعتبر',
  // TOAST MESSAGE
  TOAST_MSG__WELCOME: 'خوش آمدید',
  // BAMACHOUB
  BAMACHOUB__ADDREES:
    'اصفهان، سه راه درچه، اول جاده اصفهان-نجف آباد(بلوار الغدیر)، روبروی تقاطع اول، کوچه باسکول، پلاک 116',
  BAMACHOUB__LAT: '32.6108959',
  BAMACHOUB__LON: '51.5522541',
  BAMACHOUB__LABEL:
    'درچه، اصفهان، سه راه درچه، کیلومتر یک جاده نجف آباد، تقاطع اول، کوچه باسکول، انتهای کوچه سمت، راست،، Iran',
  BAMACHOUB__PHONE: '+98 313 377 0341',
  BAMACHOUB__MOBILE: '+98 913 389 1541',
  BAMACHOUB__EMAIL: 'Info@bmch.ir',
  BAMACHOUB__INSTAGRAM: 'https://www.instagram.com/bama.choub/',
  BAMACHOUB__TELEGRAM: 'https://t.me/joinchat/AAAAAEwr-Qpw4e7EZu7tjQ',
  BAMACHOUB__LINKEDIN: 'https://www.linkedin.com/company/bamachoub',
  BAMACHOUB__WHATSAPP: `https://wa.me/989133891541?text=${encodeURI(
    'ارسال شده از باماچوب موبایل در تاریخ ' +
      new Date(Date.now()).toLocaleDateString() +
      '\n',
  )}`,
  // AUTH
  AUTH__ENTER_PASS: 'رمز عبور خود را وارد کنید',
  AUTH__CODE_SENT: 'کد تایید برای شما ارسال شد',
  // CART
  CART__EMPTY: 'سبد خرید شما خالی است',
  CART__SUCCESS: 'سفارش شما در حال آماده سازی می باشد \nو بزودی ارسال خواهد شد',
  CART__FAILURE:
    'درصورت کسر وجه از حساب شما تا ۷۲ ساعت آینده به حساب شما بازگردانده خواهد شد \nدر غیر اینصورت با پشتیبانی تماس بگیرید',
  // CONTACT
  CONTACT__SUCCESS: 'تیم پشتیبانی باماچوب بزودی با شما تماس میگیرد',
};
