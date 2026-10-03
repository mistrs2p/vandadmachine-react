import { MachineryProduct, PowderProduct, EngineeringService, ExhibitionItem } from '../types';

export const COMPANY_INFO = {
  name_fa: 'شیمی صنعت ونداد',
  name_en: 'Shimi Sanat Vandad (Vandad Machinery)',
  brand_fa: 'ونداد ماشینری',
  brand_en: 'Vandad Machinery',
  tagline_fa: 'طراح و سازنده تخصصی اسپری درایر، روتاری اتمایزر و ماشین‌آلات فرآیندی',
  tagline_en: 'Specialized Designer & Manufacturer of Industrial Spray Dryers, Rotary Atomizers & Process Equipment',
  phone_landline: '021-28425686',
  phone_landline_display_fa: '۰۲۱-۲۸۴۲۵۶۸۶',
  phone_mobile: '09127589544',
  phone_mobile_display_fa: '۰۹۱۲۷۵۸۹۵۴۴',
  whatsapp_number: '+989127589544',
  email: 'info@vandadmachinery.com',
  address_fa: 'تهران، کیلومتر ۵۰ جاده خاوران، شهرک صنعتی عباس‌آباد، بلوار ابن‌سینا، خیابان مدرس، نبش خیابان ۱۳، شرکت شیمی صنعت ونداد',
  address_en: 'Tehran, Km 50 Khavaran Rd, Abbas Abad Industrial Park, Ibn Sina Blvd, Modarres St, Corner of 13th St, Shimi Sanat Vandad Co.',
  postal_code: '3393166889',
  certifications: [
    { label_fa: 'شرکت دانش‌بنیان در فناوری روتاری اتمایزر', label_en: 'Certified Knowledge-Based in Rotary Atomizer Tech' },
    { label_fa: 'عضو انجمن سازندگان تجهیزات صنعتی', label_en: 'Industrial Equipment Manufacturers Association Member' },
    { label_fa: 'استاندارد بهداشتی GMP و گرید دارویی', label_en: 'GMP Sanitary & Pharmaceutical Grade Compliance' }
  ]
};

export const MACHINERY_PRODUCTS: MachineryProduct[] = [
  {
    id: 'spray-dryer',
    slug: 'spray-dryer',
    category: 'spray_dryer',
    name_fa: 'اسپری درایر صنعتی (خشک‌کن پاششی)',
    name_en: 'Industrial Spray Dryer System',
    tagline_fa: 'تبدیل مستقیم محلول، سوسپانسیون و امولسیون به پودر یکنواخت با بالاترین راندمان حرارتی',
    tagline_en: 'Direct conversion of liquid solutions, slurries and emulsions into uniform dry powder',
    description_fa: 'سیستم‌های اسپری درایر شرکت شیمی صنعت ونداد بر اساس محاسبات دینامیک سیالات محاسباتی (CFD) و با در نظر گرفتن ویژگی‌های ترموفیزیکی ماده خوراک طراحی می‌شوند. این تجهیزات مجهز به محفظه خشک‌کن تمام استیل با پوشش بهداشتی، سیستم پاشش دوگانه (روتاری اتمایزر و نازل تحت فشار)، ژنراتور هوای گرم غیرمستقیم با راندمان بالا و سامانه بازیافت دو مرحله‌ای (سیکلون راندمان بالا و اسکرابر یا بگ فیلتر) هستند.',
    description_en: 'Vandad Machinery spray drying systems are engineered using computational fluid dynamics (CFD) tailored to the specific thermophysical characteristics of feed slurries. Equipped with sanitary stainless steel drying chambers, dual atomization options (rotary disk and pressure nozzle), high-efficiency indirect air heaters, and dual-stage powder recovery systems (cyclones and pulse-jet bag filters).',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2024/09/اسپری-درایر9.jpg',
    schematicType: 'spray_tower',
    highlightSpecs: [
      { label_fa: 'ظرفیت تبخیر آب', label_en: 'Evaporation Capacity', value: '10 - 2,000 kg/h' },
      { label_fa: 'دمای هوای ورودی', label_en: 'Inlet Air Temp', value: '150°C - 350°C' },
      { label_fa: 'سرعت چرخش اتمایزر', label_en: 'Atomizer Speed', value: '10,000 - 20,000 RPM' },
      { label_fa: 'جنس بدنه در تماس', label_en: 'Contact Metallurgy', value: 'AISI 316L / 304' }
    ],
    specifications: [
      { parameter_fa: 'ظرفیت تبخیر رطوبت', parameter_en: 'Water Evaporation Capacity', value_fa: 'از ۱۰ تا ۲,۰۰۰ کیلوگرم بر ساعت (پایلوت تا مگاپلنت)', value_en: '10 to 2,000 kg/h (Pilot to Mega Plant)' },
      { parameter_fa: 'محدوده دمای ورودی', parameter_en: 'Inlet Air Temperature', value_fa: '۱۴۰ الی ۳۵۰ درجه سانتی‌گراد (بسته به حساسیت ماده)', value_en: '140°C to 350°C (depending on material sensitivity)' },
      { parameter_fa: 'محدوده دمای خروجی', parameter_en: 'Outlet Air Temperature', value_fa: '۷۰ الی ۱۱۰ درجه سانتی‌گراد', value_en: '70°C to 110°C' },
      { parameter_fa: 'نوع اتمایزر', parameter_en: 'Atomizer Technology', value_fa: 'روتاری اتمایزر دیسکی پرسرعت یا نازل فشاری دو جریانه', value_en: 'High-speed rotary disk or two-fluid pressure nozzle' },
      { parameter_fa: 'منبع تامین حرارت', parameter_en: 'Heating Source Options', value_fa: 'مشعل گازسوز مستقیم/غیرمستقیم، مبدل بخار، روغن داغ، المنت برقی', value_en: 'Gas burner (direct/indirect), steam heat exchanger, electric, thermal oil' },
      { parameter_fa: 'راندمان جمع‌آوری پودر', parameter_en: 'Powder Recovery Rate', value_fa: 'بالای ۹۹.۵٪ با ترکیب سیکلون و بگ‌فیلتر پالس جت', value_en: 'Over 99.5% with high-efficiency cyclone & bag filter' },
      { parameter_fa: 'سیستم اتوماسیون', parameter_en: 'Control & Automation', value_fa: 'تابلو برق هوشمند مبتنی بر PLC زیمنس و مانیتورینگ HMI تاچ', value_en: 'Smart PLC (Siemens) with touch HMI & SCADA telemetry' }
    ],
    advantages_fa: [
      'امکان خشک کردن طیف وسیعی از ترکیبات با تغییر دیسک اتمایزر',
      'مناسب برای مواد حساس به حرارت به دلیل تبخیر فوق سریع در کسر ثانیه',
      'تولید ذرات کاملا همگن با دانه‌بندی و رطوبت یکنواخت و کنترل‌پذیر',
      'دارای سیستم شستشوی درجا (CIP) جهت کاربری در صنایع دارویی و غذایی',
      'مصرف بهینه انرژی با طراحی عایق‌بندی چندلایه سرامیکی و راک‌وول'
    ],
    advantages_en: [
      'Wide product flexibility achieved simply by swapping atomizer disks',
      'Ideal for heat-sensitive materials due to instantaneous evaporation in milliseconds',
      'Produces uniform spherical hollow particles with precisely controlled residual moisture',
      'Equipped with optional Clean-In-Place (CIP) systems for sanitary GMP compliance',
      'Optimized thermal energy consumption with multilayer ceramic & rockwool insulation'
    ],
    applications_fa: [
      'صنایع شیمیایی: سولفات‌های فلزی، شوینده‌ها، رنگدانه‌ها و کاتالیزورها',
      'صنایع غذایی: پودر تخم‌مرغ، پودر شیر و آب‌پنیر، عصاره‌های گیاهی، مالتودکسترین',
      'صنایع دارویی: آنتی‌بیوتیک‌ها، پلیمرهای دارویی و عصاره‌های سنتی',
      'صنایع معدنی و سرامیک: لعاب‌ها، کربنات کلسیم، اکسید روی و دی‌اکسید تیتانیوم'
    ],
    applications_en: [
      'Chemicals: Metal sulfates, detergents, organic pigments, catalysts',
      'Food & Beverage: Whole/yolk egg powder, dairy whey, botanical extracts, yeast',
      'Pharmaceuticals: Antibiotics, active pharma ingredients (APIs), botanical granules',
      'Ceramics & Minerals: Tile slip, zinc oxide, titanium dioxide, specialty catalysts'
    ]
  },
  {
    id: 'rotary-atomizer',
    slug: 'rotary-atomizer',
    category: 'atomizer',
    name_fa: 'روتاری اتمایزر دانش‌بنیان ونداد',
    name_en: 'High-Speed Precision Rotary Atomizer',
    tagline_fa: 'قلب تپنده اسپری درایر؛ طراحی دانش‌بنیان با دور چرخش ۱۰ الی ۲۰ هزار دور در دقیقه',
    tagline_en: 'The heart of spray drying plants: high-speed precision balanced rotary atomizer up to 20,000 RPM',
    description_fa: 'روتاری اتمایزر شرکت شیمی صنعت ونداد، یک دستاورد مهندسی های‌تک و دانش‌بنیان در سطح ملی است. این تجهیز مایع غلیظ را تحت نیروی گریز از مرکز دیسک دوار به ابری از قطرات میکرونی با قطر ۱۰ الی ۸۰ میکرون تبدیل می‌کند. اسپیندل این دستگاه با بالانس دینامیکی گرید G0.4، برینگ‌های سرامیکی های‌اسپید و مدار روغن‌کاری گردشی تحت فشار تجهیز شده است تا کارکرد مداوم ۲۴/۷ را بدون لرزش تضمین نماید.',
    description_en: 'The rotary atomizer from Shimi Sanat Vandad is a certified knowledge-based engineering achievement. Utilizing extreme centrifugal force, it transforms concentrated slurries into a dense cloud of micro-droplets (10-80 microns). Features a dynamic balancing grade G0.4 spindle, ultra-high-speed hybrid ceramic bearings, and pressurized oil circulation lubrication for uninterrupted 24/7 industrial duty.',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2024/09/اتمایزر-شیمی-صنعت-ونداد2.jpg',
    schematicType: 'rotary_disk',
    highlightSpecs: [
      { label_fa: 'سرعت چرخش', label_en: 'Rotational Velocity', value: '10,000 - 20,000 RPM' },
      { label_fa: 'سایز قطرات پاشش', label_en: 'Droplet Spectrum', value: '15 - 75 Microns' },
      { label_fa: 'کنترل سرعت', label_en: 'Speed Inverter', value: 'VFD Precise Modulation' },
      { label_fa: 'جنس دیسک', label_en: 'Disk Metallurgy', value: 'Titanium / Hardened 316L' }
    ],
    specifications: [
      { parameter_fa: 'دامنه دور کاری', parameter_en: 'Operating RPM Range', value_fa: '۱۰,۰۰۰ الی ۲۰,۰۰۰ دور در دقیقه با اینورتر فرکانسی', value_en: '10,000 to 20,000 RPM via high-frequency drive' },
      { parameter_fa: 'قطر دیسک پاشش', parameter_en: 'Atomizer Wheel Diameter', value_fa: '۱۲۰ الی ۲۶۰ میلی‌متر با کانال‌های سرامیکی ضدسایش', value_en: '120 to 260 mm with wear-resistant inserts' },
      { parameter_fa: 'سیستم روان‌کاری', parameter_en: 'Lubrication Architecture', value_fa: 'پکیج گردش روغن هیدرولیک با سنسور فشار، دبی و فیلتراسیون میکرونی', value_en: 'Circulation oil system with flow, pressure & thermal interlocks' },
      { parameter_fa: 'پایش وضعیت ارتعاشات', parameter_en: 'Vibration Monitoring', value_fa: 'سنسور شتاب‌سنج آنلاین با قابلیت قطع خودکار اضطراری', value_en: 'Online piezo accelerometer with automatic emergency shutdown' },
      { parameter_fa: 'سیستم خنک‌کاری', parameter_en: 'Cooling System', value_fa: 'جکت خنک‌کننده آب و گاز نیتروژن در ناحیه سیل‌ها', value_en: 'Water jacket cooling and gas purging across mechanical seals' }
    ],
    advantages_fa: [
      'ثبت اختراع و گواهی دانش‌بنیان رسمی در معاونت علمی و فناوری ریاست جمهوری',
      'مقاومت فوق‌العاده در برابر سایش در مواجهه با اسلاری‌های خورنده و مواد معدنی',
      'تولید ابر مه کاملاً متقارن جهت جلوگیری از چسبیدن مواد به دیواره محفظه',
      'تامین قطعات یدکی، دیسک‌های یدک و سرویس کالیبراسیون و بالانس دور بالا در داخل کشور',
      'امکان نصب و جایگزینی روی اسپری درایرهای اروپایی و آسیایی موجود در کارخانجات'
    ],
    advantages_en: [
      'Certified Knowledge-Based domestic technology with national patent status',
      'Superb abrasive and corrosion resistance against harsh mineral slurries',
      'Perfect 360-degree spray symmetry preventing chamber wall accumulation',
      '100% domestic availability of precision spare parts, custom wheels, and high-speed balancing',
      'Drop-in replacement retrofit capability for existing European or Asian spray drying towers'
    ],
    applications_fa: [
      'خشک‌کردن اسلاری‌های دیرگداز و سرامیکی با درصد جامد بالا',
      'تولید پودرهای دارویی با نیازمندی توزیع باریک اندازه ذرات (Narrow PSD)',
      'صنایع غذایی حساس نظیر شیرخشک، ویتامین‌ها و طعم‌دهنده‌ها'
    ],
    applications_en: [
      'High-solids ceramic and mineral slurries requiring wear resistance',
      'Pharmaceutical powder drying requiring narrow particle size distribution (PSD)',
      'Heat-sensitive nutritional powders, dairy components, and aroma volatiles'
    ]
  },
  {
    id: 'fluid-bed-granulator',
    slug: 'fluid-bed-granulator',
    category: 'fluid_bed',
    name_fa: 'دستگاه گرانول‌ساز بستر سیال (Fluid Bed Granulator)',
    name_en: 'Fluid Bed Granulator & Agglomerator',
    tagline_fa: 'فناوری معلق‌سازی ذرات و گرانولاسیون پیشرفته جهت ارتقای حلالیت و چگالی توده‌ای پودرها',
    tagline_en: 'Fluidization, top-spray agglomeration and precision coating for instant-dispersible granules',
    description_fa: 'گرانول‌ساز بستر سیال شرکت شیمی صنعت ونداد، فرآیندهای مخلوط‌سازی، گرانول‌سازی، خشک‌کردن و خنک‌سازی را در یک محفظه متمرکز می‌کند. با دمیدن هوای گرم فیلترشده از کف صفحه مشبک، ذرات پودر در هوا شناور شده و همزمان با پاشش محلول چسباننده (بایندر) از نازل بالای بستر، ذرات متراکم و دانه‌های یکنواخت با قابلیت حل سریع و جریان‌پذیری عالی (Flowability) تولید می‌شوند.',
    description_en: 'The Fluid Bed Granulator by Vandad combines mixing, granulating, drying, and cooling inside a single enclosed processor. Heated conditioned air fluidizes the powder mass through a perforated distribution plate while an atomized liquid binder creates strong, porous granules with enhanced flowability and instant dispersion properties.',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2025/10/گرانول-ساز-بستر-سیال-1.jpg',
    schematicType: 'fluid_bed',
    highlightSpecs: [
      { label_fa: 'ظرفیت هر بچ', label_en: 'Batch Capacity', value: '30 - 500 kg/batch' },
      { label_fa: 'سایز گرانول خروجی', label_en: 'Granule Size', value: '0.2 - 2.5 mm' },
      { label_fa: 'کنترل بایندر', label_en: 'Binder Spraying', value: 'Top & Tangential Nozzle' },
      { label_fa: 'فیلتراسیون هوا', label_en: 'Air Conditioning', value: 'HEPA H13 / H14' }
    ],
    specifications: [
      { parameter_fa: 'ظرفیت محفظه بستر سیال', parameter_en: 'Chamber Working Volume', value_fa: 'از ۵۰ لیتر (پایلوت آزمایشگاهی) تا ۱۵۰۰ لیتر در هر بچ', value_en: '50 to 1,500 liters working volume per batch' },
      { parameter_fa: 'سیستم پاشش بایندر', parameter_en: 'Liquid Spray Atomization', value_fa: 'نازل دو سیاله ساخت آلمان/ونداد با تنظیم مستقل دبی مایع و فشار هوا', value_en: 'Dual-fluid nozzle with independent liquid flow & pneumatic atomization' },
      { parameter_fa: 'سیستم فیلتر کیسه‌ای', parameter_en: 'Exhaust Filter System', value_fa: 'بگ فیلتر ضدالکتریسیته ساکن با تکاننده پنوماتیکی خودکار معکوس', value_en: 'Anti-static conductive filter bags with alternating pneumatic shaking' },
      { parameter_fa: 'ایمنی انفجار', parameter_en: 'Explosion Relief Rating', value_fa: 'دریچه انفجار استاندارد تا ۲ بار فشار بیش‌ازحد (Explosion Vent 2-bar)', value_en: '2-bar shock-resistant construction with explosion relief rupture disk' }
    ],
    advantages_fa: [
      'تبدیل پودرهای غبارزا به گرانول‌های خوش‌ریز و بدون خاکه',
      'حلالیت سریع (Instantizing) محصولات غذایی و نوشیدنی‌های فوری',
      'کاهش شدید زمان فرآیند نسبت به روش‌های سنتی مرطوب و خشک‌کن سینی‌دار',
      'طراحی مطابق با استانداردهای دارویی cGMP با محفظه استنلس استیل ۳۱۶L پولیش آینه‌ای'
    ],
    advantages_en: [
      'Eliminates fine powder dust, producing uniform, clean, free-flowing granules',
      'Improves dissolution and wetting rates for instant foods and soluble beverages',
      'Drastically cuts cycle time compared to traditional wet-massing and tray drying',
      'Engineered in strict compliance with cGMP with mirror-polished 316L stainless steel'
    ],
    applications_fa: [
      'گرانول‌های دارویی جهت قرص‌سازی مستقیم و پر کردن کپسول',
      'پودرهای فوری غذایی: قهوه، پودر کاکائو، مکمل‌های پروتئینی ورزشی و شیرخشک نوزاد',
      'کودهای شیمیایی کندرها و ریزمغذی‌های کشاورزی',
      'صنایع سموم و آفت‌کش‌های زیستی'
    ],
    applications_en: [
      'Pharmaceutical granules for direct tablet compression and capsule filling',
      'Instantized beverages: cocoa, powdered drinks, sports protein, baby food formulas',
      'Slow-release agricultural micro-nutrients and granular fertilizers',
      'Biological pesticide granules and bio-stimulants'
    ]
  },
  {
    id: 'vibrating-fluid-bed-dryer',
    slug: 'vibrating-fluid-bed-dryer',
    category: 'fluid_bed',
    name_fa: 'خشک‌کن بستر سیال لرزشی (Vibrating Fluid Bed Dryer)',
    name_en: 'Continuous Vibrating Fluid Bed Dryer',
    tagline_fa: 'خشک‌سازی پیوسته مواد گرانولی و کریستالی با کمترین استرس فیزیکی و تخریب ذرات',
    tagline_en: 'Continuous, gentle drying and cooling for crystalline and fragile granular media',
    description_fa: 'خشک‌کن بستر سیال لرزشی برای موادی طراحی شده که اندازه ذرات درشت‌تر دارند یا تمایل به چسبندگی داشته و به تنهایی با هوای بستر سیال حرکت نمی‌کنند. موتورهای ویبراتور با زاویه معین، ارتعاش ملایمی به بستر وارد کرده و حرکت یکنواخت مواد در طول دستگاه را در حضور هوای گرم همگن تسهیل می‌نمایند.',
    description_en: 'Vibrating Fluid Bed Dryers are engineered for materials with broader particle distributions or sticky tendencies. Precision eccentric vibration motors gently propel the fluidized layer along the perforated deck under conditioned airflow, preventing clumping and providing uniform drying and cooling zones.',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2020/01/WhatsApp-Image-2025-04-30-at-02.33.30.jpeg',
    schematicType: 'fluid_bed',
    highlightSpecs: [
      { label_fa: 'ظرفیت خط پیوسته', label_en: 'Continuous Capacity', value: '200 - 5,000 kg/h' },
      { label_fa: 'کنترل ارتعاش', label_en: 'Vibration Control', value: 'Adjustable Dual Motors' },
      { label_fa: 'ناحیه‌های حرارتی', label_en: 'Zoned Processing', value: 'Drying + Cooling Deck' },
      { label_fa: 'افت ذرات', label_en: 'Attrition Rate', value: '< 0.1% Particle Breakage' }
    ],
    specifications: [
      { parameter_fa: 'طول بستر فعال', parameter_en: 'Active Bed Length', value_fa: '۳ الی ۱۲ متر با عرض ۶۰۰ الی ۱۵۰۰ میلی‌متر', value_en: '3 to 12 meters length, 600 to 1,500 mm deck width' },
      { parameter_fa: 'سیستم ارتعاش', parameter_en: 'Vibratory Drive', value_fa: 'الکتروموتورهای ضدانفجار و لنگ‌دار ایتالیایی/ایرانی با ایزولاسیون فنر الاستومری', value_en: 'Adjustable eccentric vibrator motors on heavy-duty elastomeric spring mounts' },
      { parameter_fa: 'تقسیم‌بندی فرآیندی', parameter_en: 'Process Zones', value_fa: 'بخش اول خشک‌کننده هوای گرم و بخش دوم خنک‌کننده با هوای خشک سرد', value_en: 'Pre-heating, moisture extraction zone, and ambient cooling deck' }
    ],
    advantages_fa: [
      'بدون خرد شدن ذرات کریستالی حساس (عدم شکستن بلورهای شکر، نمک یا سولفات‌ها)',
      'مصرف هوای کمتر به دلیل کمک نیروی مکانیکی ارتعاش به معلق‌سازی',
      'امکان خنک‌سازی محصول تا دمای بسته‌بندی در انتهای همان دستگاه'
    ],
    advantages_en: [
      'Gentle fluidization preserves fragile crystal geometries (sugar, specialty salts)',
      'Substantially lower airflow requirement due to mechanical vibratory assist',
      'Integrated in-line product cooling stage ready for direct silo transfer or packing'
    ],
    applications_fa: [
      'کریستال‌های سولفات مس، منگنز، منیزیم و نمک‌های خوراکی',
      'گرانول‌های پلاستیک و پلیمرها',
      'شکر، حبوبات فرآوری‌شده و غلات صبحانه'
    ],
    applications_en: [
      'Copper, manganese, magnesium sulfate crystals and refined industrial salts',
      'Polymer chips, plastic resin pellets, PVC resins',
      'Refined sugar, processed grains, puffed food ingredients'
    ]
  },
  {
    id: 'drum-flaker',
    slug: 'drum-flaker',
    category: 'drum_flaker',
    name_fa: 'درام فلیکر صنعتی (Drum Flaker & Solidifier)',
    name_en: 'Industrial Cooling Drum Flaker',
    tagline_fa: 'انجماد و ورقه‌سازی پیوسته مواد مذاب شیمیایی، رزین‌ها، گوگرد و پارافین با درام خنک‌کننده',
    tagline_en: 'Continuous solidification and flaking of molten chemicals, resins, sulfur and waxes',
    description_fa: 'دستگاه درام فلیکر شرکت شیمی صنعت ونداد جهت انجماد پیوسته مواد مایع مذاب و تبدیل آن‌ها به پرک‌ها (فلیک‌های) جامد و با ضخامت یکنواخت طراحی شده است. درام چرخان با ضخامت مهندسی‌شده از داخل توسط آب سرد یا چیلر اسپری شده و مذاب موجود در تشتک با چرخش درام روی سطح منجمد و توسط تیغه اسکراپر فولادی دقیق جدا می‌گردد.',
    description_en: 'Vandad industrial drum flakers are engineered for the continuous crystallization and flaking of molten liquids into uniform solid flakes. The precision-machined rotating drum is internally cooled by spray manifolds; as it dips into the heated dip pan, a thin solidified layer forms which is cleanly shaved off by an adjustable doctor blade.',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2024/03/درام-فلیکر.jpg',
    schematicType: 'drum_cooler',
    highlightSpecs: [
      { label_fa: 'ظرفیت تولید', label_en: 'Production Output', value: '150 - 3,000 kg/h' },
      { label_fa: 'قطر درام', label_en: 'Drum Diameter', value: '500 - 1,800 mm' },
      { label_fa: 'کنترل ضخامت فلیک', label_en: 'Flake Thickness', value: '0.3 - 3.0 mm' },
      { label_fa: 'سیستم تیغه اسکراپر', label_en: 'Doctor Blade Mechanism', value: 'Pneumatic / Counter-Weighted' }
    ],
    specifications: [
      { parameter_fa: 'جنس پوسته درام', parameter_en: 'Drum Shell Material', value_fa: 'استنلس استیل ۳۱۶L پولیش شده یا کروم سخت ضدخراش', value_en: 'Sanitary AISI 316L or heavy hard-chrome coated carbon steel' },
      { parameter_fa: 'سیستم چرخش آب خنک', parameter_en: 'Internal Cooling System', value_fa: 'اسپری تحت فشار داخلی با لوله مکش تخلیه سیفون پیوسته', value_en: 'Internal spray cooling nozzles with high-flow rotary rotary joint & siphon' },
      { parameter_fa: 'کنترل سرعت درام', parameter_en: 'Drum Speed Modulation', value_fa: 'موتورگیربکس هلیکال به همراه اینورتر سرعت پیوسته', value_en: 'High-torque helical gearmotor with variable frequency inverter drive' },
      { parameter_fa: 'پوشش محافظ هود', parameter_en: 'Protective Enclosure', value_fa: 'هود بخارات تمام استیل مجهز به درهای دسترسی پلکسی و دهانه تخلیه گاز', value_en: 'Full stainless steel fume hood with sealed inspection windows & exhaust flange' }
    ],
    advantages_fa: [
      'عملکرد کاملا پیوسته و جایگزینی روش‌های پرهزینه و منسوخ انجماد قالبی',
      'تولید پرک‌های یکدست با قابلیت حمل پنوماتیک و بسته‌بندی آسان',
      'تشتک مذاب دو جداره با گرمایش روغن داغ یا بخار جهت جلوگیری از گیرش اولیه مواد',
      'تیغه اسکراپر دارای تنظیم میکرومتری زاویه و فشار تیغه'
    ],
    advantages_en: [
      '100% continuous solidifying process replacing manual pan cooling',
      'Creates uniform thickness flakes ideal for automatic conveying and bulk bagging',
      'Jacketed molten dip tray heated by hot oil or steam to avoid premature crystallization',
      'Precision micrometer-adjusted knife holder for uniform scraping and zero drum wear'
    ],
    applications_fa: [
      'صنایع پتروشیمی: گوگرد مذاب، قیرهای پلیمری، پلی‌اتیلن واکس',
      'صنایع اسیدهای چرب، استئارات کلسیم و روی، پارافین',
      'صنایع رزین‌های فنولیک، اپوکسی و چسب‌های گرم (Hot-Melt)'
    ],
    applications_en: [
      'Petrochemicals: Molten sulfur, polymer-modified bitumen, polyethylene wax',
      'Fatty acids, calcium and zinc stearates, specialty paraffins',
      'Phenolic and epoxy solid resins, hot-melt adhesives, naphthalene'
    ]
  },
  {
    id: 'chemical-reactors',
    slug: 'chemical-reactors',
    category: 'reactor',
    name_fa: 'راکتورهای شیمیایی و مخازن فرآیندی (Chemical Reactors & Vessels)',
    name_en: 'Sanitary Chemical Reactors & Pressure Vessels',
    tagline_fa: 'طراحی طبق استاندارد ASME Section VIII با انواع جکت‌های حرارتی و میکسر همزن تخصصی',
    tagline_en: 'Engineered according to ASME Sec VIII with custom limpet/dimple jackets and heavy agitators',
    description_fa: 'شرکت شیمی صنعت ونداد سازنده انواع راکتورهای استنلس استیل تک جداره، دو جداره (Conventional Jacket) و جکت لوله نیم‌گرد (Limpet Coil) جهت انجام واکنش‌های سنتز شیمیایی، پلیمریزاسیون و انحلال است. همزن‌های دستگاه متناسب با ویسکوزیته سیال از انواع توربینی، انکر، پدلی، و پروانه دریایی با مکانیکال سیل دوبل انتخاب می‌شوند.',
    description_en: 'Vandad manufactures heavy-duty process reactors in stainless steel (304, 316L, 316Ti) designed for synthesis, dissolution, and polymerization. Custom-engineered with half-pipe limpet coils or dimple jackets for thermal transfer up to 300°C, and paired with custom turbine, anchor, or marine propeller agitators featuring double mechanical seals.',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2024/09/فن-های-سانتریفیوژ-01.jpg',
    schematicType: 'spray_tower',
    highlightSpecs: [
      { label_fa: 'ظرفیت راکتور', label_en: 'Reactor Volume', value: '250 - 25,000 Liters' },
      { label_fa: 'فشار کاری', label_en: 'Working Pressure', value: '-1 to 16 Bar (Full Vacuum)' },
      { label_fa: 'سیستم آب‌بندی', label_en: 'Shaft Sealing', value: 'Double Mechanical Seal' },
      { label_fa: 'کنترل دما', label_en: 'Thermal Range', value: '-20°C to +320°C' }
    ],
    specifications: [
      { parameter_fa: 'کد طراحی مخزن', parameter_en: 'Design Engineering Standard', value_fa: 'ASME Boiler & Pressure Vessel Code (Section VIII, Div 1)', value_en: 'ASME Sec VIII Div 1 & API 650 standards' },
      { parameter_fa: 'تست‌های غیرمخرب (NDT)', parameter_en: 'Quality Inspection', value_fa: 'رادیوگرافی درز جوش (RT)، اولتراسونیک (UT) و تست هیدرواستاتیک ۱.۵ برابر', value_en: 'Radiographic (RT), Ultrasonic (UT), Liquid Penetrant & Hydrostatic 1.5x test' },
      { parameter_fa: 'کیفیت پولیش سطح داخلی', parameter_en: 'Internal Surface Finish', value_fa: 'الکتروپولیش تا Ra < 0.4 میکرومتر برای مصارف دارویی و خوراکی', value_en: 'Sanitary mirror polish / electropolish down to Ra < 0.4 µm' }
    ],
    advantages_fa: [
      'انتقال حرارت فوق‌العاده سریع با جکت‌های مهندسی‌شده لیمپت کویل',
      'سیل مکانیکی دوبل مجهز به ترموسیفون آب‌بندی جهت جلوگیری از نشت گازهای سمی',
      'تیغه‌های همزن بهینه‌سازی‌شده برای مواد با ویسکوزیته بالا و اسلاری‌های غلیظ'
    ],
    advantages_en: [
      'Superb heat transfer coefficients with CNC-rolled half-pipe limpet coils',
      'Double mechanical seals with thermosiphon barrier systems preventing toxic leaks',
      'Custom impeller configurations designed for high-viscosity non-Newtonian fluids'
    ],
    applications_fa: [
      'سنتز انواع سولفات‌ها و کودهای کلاته مایع',
      'تولید رزین‌های آلکید، پلی‌استر، فنولیک و چسب‌های صنعتی',
      'مخازن آماده‌سازی خوراک اسپری درایر و همگن‌سازی'
    ],
    applications_en: [
      'Synthesis of metal sulfates and chelated liquid fertilizers',
      'Production of alkyd, polyester, phenolic resins and industrial sealants',
      'Slurry preparation and feed formulation tanks ahead of spray drying towers'
    ]
  },
  {
    id: 'homogenizer',
    slug: 'homogenizer',
    category: 'homogenizer',
    name_fa: 'هموژنایزر فشار بالا (High-Pressure Homogenizer)',
    name_en: 'Industrial High-Pressure Homogenizer',
    tagline_fa: 'ریزسازی ذرات و آماده‌سازی امولسیون پایدار پیش از ورود به اسپری درایر',
    tagline_en: 'High-pressure micronization and uniform emulsion stabilization for spray feedstocks',
    description_fa: 'دستگاه هموژنایزر ونداد با ایجاد فشار بالا تا ۳۵۰ بار و عبور محلول از شیار میکرونی شیر هموژنایزر، نیروهای شدید برش هیدرودینامیکی و کاویتاسیون اعمال کرده و توده‌های ذرات را تا ابعاد ساب‌میکرون و نانومتر ریز می‌کند تا پودر خروجی اسپری درایر از حداکثر یکنواختی برخوردار باشد.',
    description_en: 'The Vandad high-pressure homogenizer forces liquid suspensions through microscopic gaps under pressures up to 350 bar. Intense shear and cavitation forces shatter agglomerates down to sub-micron dimensions, preventing phase separation and ensuring optimal drying kinetics.',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2024/09/photo_2024-06-12_16-41-35-2.jpg',
    schematicType: 'spray_tower',
    highlightSpecs: [
      { label_fa: 'حداکثر فشار', label_en: 'Peak Pressure', value: 'Up to 350 Bar' },
      { label_fa: 'دبی کاری', label_en: 'Flow Capacity', value: '200 - 5,000 L/h' },
      { label_fa: 'تعداد استیج', label_en: 'Homogenizing Stages', value: 'Single or Dual Stage' },
      { label_fa: 'جنس پیستون‌ها', label_en: 'Plunger Metallurgy', value: 'Solid Ceramic / Tungsten' }
    ],
    specifications: [
      { parameter_fa: 'شیر هموژنایزر', parameter_en: 'Homogenizing Valve Block', value_fa: 'فولاد فورج یکپارچه ضد زنگ با سیت تنگستن کارباید ضدسایش', value_en: 'Monoblock forged stainless steel with tungsten carbide seat & impact ring' },
      { parameter_fa: 'سیستم روان‌کاری', parameter_en: 'Crankcase Lubrication', value_fa: 'گردش روغن پرفشار مجهز به کولر خنک‌کننده داخلی', value_en: 'Splash and forced-feed oil lubrication with built-in oil cooling radiator' }
    ],
    advantages_fa: [
      'پایداری بسیار بالای سوسپانسیون و جلوگیری از رسوب‌گذاری قبل از اتمایزر',
      'کاهش اندازه قطرات پاشش و افزایش سرعت تبخیر در برج اسپری درایر',
      'طول عمر بالا با قطعات مصرفی پوشش‌داده شده با کارباید تنگستن'
    ],
    advantages_en: [
      'Exceptional suspension stability preventing clogging before the atomizer',
      'Smaller initial droplets leading to faster thermal evaporation in spray drying',
      'Extended service life with diamond-honed ceramic pistons and tungsten seats'
    ],
    applications_fa: [
      'امولسیون‌های دارویی، سوسپانسیون‌های غذایی و آب‌پنیر، رنگدانه‌های صنعتی'
    ],
    applications_en: [
      'Pharmaceutical nano-emulsions, infant milk formulas, food flavor encasings, dyes'
    ]
  }
];

export const POWDER_PRODUCTS: PowderProduct[] = [
  {
    id: 'zinc-sulfate',
    name_fa: 'پودر سولفات روی منوهیدرات (Zinc Sulfate)',
    name_en: 'Zinc Sulfate Monohydrate Powder',
    chemicalFormula: 'ZnSO4 · H2O',
    category_fa: 'کود و مواد شیمیایی صنعتی',
    category_en: 'Industrial Chemicals & Agrochemicals',
    description_fa: 'تولید شده با اسپری درایرهای ونداد با خلوص بالا، جریان‌پذیری عالی و بدون کلوخه‌شدگی، با درصد روی ۳۳ الی ۳۵ درصد مناسب برای مصارف کشاورزی و دارویی.',
    description_en: 'Produced using Vandad spray dryers with superior purity, free-flowing non-caking morphology, and 33-35% elemental Zinc for agrochemical and pharmaceutical grades.',
    specifications: {
      purity: '33% - 35.5% Zn (High Grade)',
      moisture: '< 0.5% (Controlled)',
      meshSize: '80 - 120 Mesh',
      color: 'White Pure Micro-Crystalline'
    },
    industrialUses_fa: [
      'کودهای ریزمغذی پیشرفته و کلاته در کشاورزی مدرن',
      'مکمل‌های خوراک دام و طیور',
      'صنایع رنگ‌سازی، آبکاری و تولید نمک‌های روی'
    ],
    industrialUses_en: [
      'High-solubility agricultural micronutrient chelation',
      'Animal feed nutritional premixes and supplements',
      'Electroplating, textile dyeing, and zinc salt synthesis'
    ]
  },
  {
    id: 'manganese-sulfate',
    name_fa: 'پودر سولفات منگنز منوهیدرات (Manganese Sulfate)',
    name_en: 'Manganese Sulfate Monohydrate',
    chemicalFormula: 'MnSO4 · H2O',
    category_fa: 'کود و کاتالیزورهای صنعتی',
    category_en: 'Catalysts & Agricultural Nutrients',
    description_fa: 'پودر صورتی روشن یکنواخت با حلالیت صد در صد در آب، تولید شده در بستر خشک‌کن پاششی ونداد بدون تغییر فاز بلوری.',
    description_en: 'Light pink uniform powder with 100% water solubility, processed with zero thermal degradation using precision spray drying.',
    specifications: {
      purity: '31% - 32% Mn content',
      moisture: '< 0.8%',
      meshSize: '100 Mesh',
      color: 'Pale Pink Free-Flowing'
    },
    industrialUses_fa: [
      'تقویت خاک و باغات پسته، مرکبات و زراعت',
      'تولید فریت‌های مغناطیسی و باتری‌های لیتیوم-منگنز',
      'کاتالیزور اکسیداسیون در سنتز ترکیبات آلی'
    ],
    industrialUses_en: [
      'Soil nutrient remediation for orchards and intensive horticulture',
      'Magnetic ferrite cores and battery precursors',
      'Industrial oxidation catalysts in organic synthesis'
    ]
  },
  {
    id: 'magnesium-sulfate',
    name_fa: 'پودر سولفات منیزیم (Magnesium Sulfate)',
    name_en: 'Dried Magnesium Sulfate Powder',
    chemicalFormula: 'MgSO4 · H2O',
    category_fa: 'صنایع کشاورزی و بهداشتی',
    category_en: 'Specialty Salts & Agro Chemicals',
    description_fa: 'نمک منیزیم اسپری درایر شده با دانه‌بندی یکنواخت، کاملاً محلول و فاقد ناخالصی‌های نامحلول.',
    description_en: 'Spray-dried magnesium salt with narrow particle distribution, ultra-low insoluble residue, and stable shelf life.',
    specifications: {
      purity: '> 99.0% MgSO4 basis',
      moisture: '< 1.0%',
      meshSize: '100 - 150 Mesh',
      color: 'Pure Snow White'
    },
    industrialUses_fa: [
      'تامین همزمان گوگرد و منیزیم در تغذیه برگ گیاهان (محلول‌پاشی)',
      'صنایع نمک‌های دارویی و تسکین‌دهنده عضلانی',
      'صنایع دباغی چرم و رنگرزی الیاف'
    ],
    industrialUses_en: [
      'Foliar spray fertilizers providing magnesium & sulfur',
      'Pharmaceutical-grade Epsom salts & wellness formulations',
      'Leather tanning and textile printing binders'
    ]
  },
  {
    id: 'copper-sulfate',
    name_fa: 'پودر سولفات مس (Copper Sulfate)',
    name_en: 'Copper Sulfate Powder',
    chemicalFormula: 'CuSO4 · 5H2O / Monohydrate',
    category_fa: 'قارچ‌کش و فرآوری فلزات',
    category_en: 'Fungicides & Flotation Reagents',
    description_fa: 'کریستال‌ها و پودر اسپری شده با رنگ فیروزه‌ای استاندارد و میزان مس ۲۵٪ با حلالیت سریع.',
    description_en: 'Vivid cyan powder engineered for high dissolution rates in agricultural sprayers and industrial mineral flotation.',
    specifications: {
      purity: '25.0% - 25.4% Cu',
      moisture: '< 1.2%',
      meshSize: '80 - 100 Mesh',
      color: 'Brilliant Cyan Blue'
    },
    industrialUses_fa: [
      'تولید قارچ‌کش بردوفیکس در کنترل بیماری‌های باغات',
      'ماده فعال‌کننده در فلوتاسیون معادن مس و روی',
      'صنایع تولید رنگ و چسب‌های دریایی'
    ],
    industrialUses_en: [
      'Bordeaux mixture agricultural fungicide formulation',
      'Activator reagent in mineral flotation processing',
      'Marine anti-fouling coatings and chemical synthesis'
    ]
  },
  {
    id: 'egg-powder',
    name_fa: 'پودر تخم‌مرغ کامل، زرده و سفیده (Egg Powder)',
    name_en: 'Whole, Yolk & Albumen Egg Powder',
    chemicalFormula: 'Pasteurized Egg Solids',
    category_fa: 'صنایع غذایی و قنادی',
    category_en: 'Food & Bakery Ingredients',
    description_fa: 'خشک‌شده در شرایط کاملا بهداشتی (Sanitary) با حفظ خواص تغذیه‌ای، کف‌کنندگی سفیده و امولسیون زرده، با ماندگاری طولانی.',
    description_en: 'Sanitarily spray-dried pasteurized egg solids retaining functional whipping, emulsifying and protein properties with 18+ months shelf life.',
    specifications: {
      purity: '100% Natural Pasteurized',
      moisture: '< 4.0%',
      meshSize: 'Fine Dispersible Powder',
      color: 'Golden Yellow / Cream White'
    },
    industrialUses_fa: [
      'کارخانجات کیک، بیسکویت، نان‌های صنعتی و کلوچه',
      'سس‌های مایونز و سس‌های سالاد سرد',
      'تولید مکمل‌های پروتئینی ورزشی (پودر آلبومین خالص)'
    ],
    industrialUses_en: [
      'Industrial baking, pastry, confectioneries and wafer doughs',
      'Emulsified condiments, mayonnaise, and salad dressings',
      'High-protein sports nutrition isolates (pure albumen)'
    ]
  },
  {
    id: 'gelatin-powder',
    name_fa: 'پودر ژلاتین خوراکی و دارویی (Gelatin Powder)',
    name_en: 'Edible & Pharmaceutical Gelatin Powder',
    chemicalFormula: 'Collagen Protein Hydrolysate',
    category_fa: 'صنایع دارویی و غذایی',
    category_en: 'Pharmaceutical & Food Gelling Agents',
    description_fa: 'تولید ژلاتین با بلوم (Bloom) بالا و انحلال شفاف به کمک فرآیند خشک‌سازی کنترل‌شده با اتمایزر روتاری.',
    description_en: 'High-bloom gelatin powder with crystal-clear dissolution produced through gentle rotary atomization drying.',
    specifications: {
      purity: '> 88% Protein Content',
      moisture: '< 8.0%',
      meshSize: '60 - 80 Mesh',
      color: 'Light Amber Translucent'
    },
    industrialUses_fa: [
      'پوکه کپسول‌های دارویی نرم و سخت (Softgels & Hard Capsules)',
      'پاستیل، ژله، دسرها و فرآورده‌های لبنی',
      'تثبیت‌کننده بافت در صنایع نوشیدنی و بستنی'
    ],
    industrialUses_en: [
      'Softgel and hard pharmaceutical capsule shells',
      'Confectionery gummies, marshmallows, jellies, and desserts',
      'Clarification stabilizer in beverage and dairy processing'
    ]
  }
];

export const ENGINEERING_SERVICES: EngineeringService[] = [
  {
    id: 'pilot-testing',
    title_fa: 'مرکز تست پایلوت و فرمولاسیون آزمایشگاهی',
    title_en: 'Pilot Plant Testing & Material Trial Lab',
    shortDesc_fa: 'تست نمونه ماده شما روی دستگاه اسپری درایر پایلوت پیش از سرمایه‌گذاری و ساخت خط صنعتی',
    shortDesc_en: 'Test-drive your raw slurry on our pilot spray dryer before committing to full-scale fabrication',
    fullDesc_fa: 'شرکت شیمی صنعت ونداد با تجهیز واحد پایلوت تست در کارخانه، امکان بررسی رفتار ترمودینامیکی و سینتیک خشک‌شدن نمونه‌های ارسالی کارفرمایان را فراهم کرده است. در این فرآیند، بهترین سرعت اتمایزر، دمای بهینه ورودی و خروجی، دبی خوراک‌دهی و نوع دیسک تعیین شده و نمونه پودر برای آنالیز به کارفرما تحویل داده می‌شود.',
    fullDesc_en: 'Vandad operates a dedicated pilot testing facility to evaluate your slurry before fabrication. We determine precise operating parameters: optimum inlet/outlet air temperatures, atomizer disc geometry, feeding rate, and residual moisture kinetics, delivering physical powder samples for laboratory certification.',
    icon: 'FlaskConical',
    deliverables_fa: [
      'گزارش جامع ترمودینامیکی و مهندسی فرآیند',
      'تحویل نمونه پودر تولید شده در مقادیر ۵ تا ۵۰ کیلوگرم جهت آزمون بازار',
      'محاسبه دقیق ابعاد، مصرف انرژی و بازگشت سرمایه (ROI) خط صنعتی'
    ],
    deliverables_en: [
      'Comprehensive thermodynamic mass & energy balance report',
      '5 to 50 kg validated powder batch for QC and market testing',
      'Precise scale-up sizing and operating cost (OPEX/CAPEX) model'
    ]
  },
  {
    id: 'custom-fabrication',
    title_fa: 'طراحی سفارشی و ساخت بر اساس الزامات فرآیند',
    title_en: 'Turnkey Custom Engineering & Fabrication',
    shortDesc_fa: 'طراحی بر مبنای CFD و استانداردهای بهداشتی و دارویی متناسب با سالن تولید و ظرفیت کارفرما',
    shortDesc_en: 'CFD-optimized mechanical engineering and fabrication tailored to your factory envelope and throughput',
    fullDesc_fa: 'تمامی بخش‌های خطوط تولید اسپری درایر از محفظه خشک‌کن، مشعل و مبدل حرارتی، پایپینگ‌های هوای گرم، سیکلون‌ها، بگ‌فیلترها و داکت‌ها به صورت سفارشی در کارخانه ونداد با ماشین‌آلات رولینگ، جوشکاری آرگون تخصصی TIG و عملیات پاسیویسیون و اسیدشویی ساخته می‌شوند.',
    fullDesc_en: 'Every module from the drying chamber, heat exchangers, sanitary air ducts, high-efficiency cyclones, to pulse-jet baghouses is fabricated in-house at our Abbas Abad manufacturing facility using precision rolling, automated orbital TIG welding, and chemical passivation.',
    icon: 'Layers',
    deliverables_fa: [
      'نقشه‌های سه‌بعدی کامل چیدمان (Plant Layout) و نقشه‌های P&ID',
      'کتابچه اطلاعات فنی (Data Book)، گواهی متریال (MTC) و گواهی تست هیدرواستاتیک',
      'طراحی طبق استانداردهای بهداشتی ۳A، cGMP و ASME'
    ],
    deliverables_en: [
      '3D Plant layouts, foundation loading specs, and P&ID diagrams',
      'Complete Quality Dossier: Material Test Certs (MTC), NDT and balancing reports',
      'Strict adherence to 3-A Sanitary, cGMP, and ASME codes'
    ]
  },
  {
    id: 'commissioning-automation',
    title_fa: 'نصب، راه‌اندازی و اتوماسیون پیشرفته PLC',
    title_en: 'On-Site Commissioning & PLC Automation',
    shortDesc_fa: 'راه‌اندازی میدانی توسط مهندسین مجرب و تجهیز به کنترل هوشمند تاچ با ثبت دیتا و ایمنی بالا',
    shortDesc_en: 'Field commissioning by seasoned engineers with touch-screen SCADA telemetry and fail-safe interlocks',
    fullDesc_fa: 'تیم اجرایی ونداد فرآیند مونتاژ مکانیکی، برق‌کشی، کالیبراسیون سنسورها و تست سرد و گرم را در محل کارخانه خریدار انجام می‌دهد. تابلوهای برق مجهز به PLC زیمنس و مانیتورینگ HMI با کنترل اتوماتیک دمای ورودی/خروجی، سرعت اتمایزر و سیستم‌های اعلان خطر و خاموشی اضطراری عرضه می‌گردند.',
    fullDesc_en: 'Our field teams oversee mechanical rigging, duct erection, sensor calibrations, cold dry-runs, and hot slurry commissioning. Control packages feature Siemens PLCs, intuitive multi-language HMIs, PID temperature loops, online vibration alarms, and remote telemetry logging.',
    icon: 'Cpu',
    deliverables_fa: [
      'نصب مکانیکی، پایپینگ و عایق‌کاری کامل در محل پروژه',
      'آموزش تخصصی پرسنل بهره‌برداری کارفرما همراه با دفترچه راهنمای فارسی/انگلیسی',
      'سامانه رصد برخط و کنترل از راه دور جهت پشتیبانی فنی سریع'
    ],
    deliverables_en: [
      'Turnkey mechanical installation, ducting, and thermal lagging',
      'Operator training programs with comprehensive bilingual manuals',
      'Optional remote telemetry modem for instant factory support'
    ]
  },
  {
    id: 'after-sales-parts',
    title_fa: 'تامین قطعات یدکی و اورهال تخصصی روتاری اتمایزر',
    title_en: 'OEM Spare Parts & High-Speed Atomizer Overhaul',
    shortDesc_fa: 'تامین انواع دیسک‌های پاشش، اسپیندل، برینگ‌های سرامیکی و خدمات بالانس دینامیکی دور بالا',
    shortDesc_en: 'Guaranteed OEM supply of atomizer wheels, ceramic bearings, spindles, and dynamic balancing services',
    fullDesc_fa: 'یکی از دغدغه‌های بزرگ کارخانجات در ایران، خرابی یا عدم دسترسی به قطعات اتمایزرهای خارجی بوده است. شرکت شیمی صنعت ونداد علاوه بر تامین قطعات تجهیزات خود، خدمات بازسازی کامل، تعویض بلبرینگ، سنگ‌زنی شفت و بالانس فوق‌دقیق انواع اتمایزرهای اروپایی نظیر Niro و GEA را با ضمانت معتبر ارائه می‌دهد.',
    fullDesc_en: 'Eliminating the downtime risks associated with imported atomizers, Vandad delivers rapid turnaround on consumable parts, precision re-balancing (Grade G0.4), bearing replacements, and overhauls for both our systems and imported Niro/GEA spray units.',
    icon: 'Wrench',
    deliverables_fa: [
      'انواع دیسک‌های تیتانیومی و فولادی ضدسایش با هندسه‌های سفارشی',
      'بلبرینگ‌های سرامیکی های‌اسپید با گریس مخصوص دما و دور بالا',
      'گارانتی معتبر ۱۲ ماهه قطعات و خدمات تعمیراتی'
    ],
    deliverables_en: [
      'Titanium & hardened alloy atomizer wheels with wear-proof nozzles',
      'Matched hybrid ceramic bearing pairs and high-speed synthetic lubricants',
      '12-Month written warranty on overhauled rotary atomizers'
    ]
  }
];

export const EXHIBITIONS_ARCHIVE: ExhibitionItem[] = [
  {
    id: 'agrofood-1403',
    title_fa: 'حضور شیمی صنعت ونداد در سی و یکمین نمایشگاه بین‌المللی ایران آگروفود',
    title_en: 'Vandad Machinery at 31st Iran Agrofood International Exhibition',
    event_fa: 'نمایشگاه بین‌المللی ایران آگروفود',
    event_en: 'Iran Agrofood International Expo',
    year: '1403 (2024)',
    location_fa: 'محل دائمی نمایشگاه‌های بین‌المللی تهران، سالن ۳۸',
    location_en: 'Tehran International Permanent Fairground, Hall 38',
    description_fa: 'رونمایی از نسل جدید روتاری اتمایزر دانش‌بنیان ونداد با قابلیت دور کاری ۲۰,۰۰۰ دور در دقیقه و معرفی خطوط تولید پودر تخم‌مرغ و ژلاتین برای کارخانجات صنایع غذایی کشور با حضور پرشور تولیدکنندگان داخلی و خارجی.',
    description_en: 'Unveiling of the next-generation knowledge-based 20,000 RPM rotary atomizer alongside food-grade egg and gelatin powder processing lines, drawing extensive interest from international and domestic food processors.',
    booth_fa: 'سالن ۳۸، غرفه شرکت شیمی صنعت ونداد',
    booth_en: 'Hall 38, Shimi Sanat Vandad Booth',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2024/07/IMG_20240612_135338_358.jpg',
    highlights_fa: [
      'نمایش کارکرد زنده اسپیندل روتاری اتمایزر با اینورتر فرکانسی',
      'ارائه نمونه پودرهای خشک‌شده در واحد پایلوت تست ونداد',
      'انعقاد قراردادهای متعدد با کارخانجات بزرگ لبنیات و قنادی'
    ],
    highlights_en: [
      'Live dynamic demonstration of high-speed spindle rotation with VFD control',
      'Display of 12+ industrial powder samples produced in our pilot testing lab',
      'B2B partnership signings with leading dairy and food ingredient producers'
    ]
  },
  {
    id: 'oil-gas-1404',
    title_fa: 'نمایشگاه بین‌المللی نفت، گاز، پالایش و پتروشیمی',
    title_en: 'International Oil, Gas, Refining & Petrochemicals Exhibition',
    event_fa: 'نمایشگاه نفت، گاز، پالایش و پتروشیمی',
    event_en: 'Tehran International Oil & Gas Expo',
    year: '1404 (2025)',
    location_fa: 'محل دائمی نمایشگاه‌های بین‌المللی تهران',
    location_en: 'Tehran International Permanent Fairground',
    description_fa: 'معرفی راکتورهای تحت فشار سنگین استنلس استیل، درام فلیکرهای تخصصی برای گوگرد مذاب و خطوط تولید کاتالیزورهای پتروشیمی با بهره‌گیری از خشک‌کن‌های بستر سیال لرزشی.',
    description_en: 'Showcasing heavy ASME stainless reactors, continuous sulfur drum flakers, and petrochemical catalyst spray drying lines designed for oil & gas refinery operations.',
    booth_fa: 'سالن تجهیزات پتروشیمی',
    booth_en: 'Petrochemical Equipment Hall',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2025/11/پالایش.jpg',
    highlights_fa: [
      'معرفی تکنولوژی درام فلیکر برای ورقه‌سازی گوگرد مذاب پالایشگاهی',
      'ارائه راه‌حل‌های بازیافت نمک و تصفیه پساب با روش تبخیر اسپری درایر',
      'جلسات فنی B2B با مدیران تدارکات هلدینگ‌های پتروشیمی'
    ],
    highlights_en: [
      'Molten sulfur flaking drum solutions for refinery sulfur recovery units',
      'Zero Liquid Discharge (ZLD) spray drying solutions for hypersaline brine',
      'Technical meetings with EPC contractors and refinery plant managers'
    ]
  },
  {
    id: 'industry-fair-1404',
    title_fa: 'بیست و چهارمین نمایشگاه بین‌المللی صنعت تهران (TIIE)',
    title_en: '24th Tehran International Industry Exhibition (TIIE)',
    event_fa: 'نمایشگاه بین‌المللی صنعت تهران',
    event_en: 'Tehran International Industry Exhibition',
    year: '1404 (2025)',
    location_fa: 'محل دائمی نمایشگاه‌های بین‌المللی تهران، سالن ماشین‌آلات صنعتی',
    location_en: 'Tehran International Permanent Fairground, Industrial Machinery Hall',
    description_fa: 'حضور ونداد به عنوان سازنده برتر ماشین‌آلات فرآیندی با نمایش گرانول‌سازهای بستر سیال، خشک‌کن‌های پاششی و سیستم‌های اتوماسیون پیشرفته PLC صنعتی.',
    description_en: 'Vandad featured as a premier manufacturer of process machinery, presenting fluid bed granulators, spray towers, and industrial PLC control stations.',
    booth_fa: 'سالن ۳۱A، غرفه شیمی صنعت ونداد',
    booth_en: 'Hall 31A, Shimi Sanat Vandad Booth',
    image_url: 'https://vandadmachinery.com/wp-content/uploads/2025/11/ونداد-صنعت-scaled.jpg',
    highlights_fa: [
      'معرفی گرانول‌سازهای بستر سیال مدرن با استانداردهای دارویی',
      'مشاوره رایگان انتخاب تجهیزات برای استارتاپ‌ها و شرکت‌های دانش‌بنیان',
      'رونمایی از کاتالوگ جدید تجهیزات فرآیندی سال ۱۴۰۴'
    ],
    highlights_en: [
      'Introduction of cGMP pharmaceutical fluid bed agglomeration systems',
      'Complimentary plant sizing consultations for emerging chemical enterprises',
      'Release of the 2025-2026 Process Equipment Engineering Catalog'
    ]
  }
];

export const SPRAY_DRYER_MODELS = [
  { model: 'VSD-10', waterEvap: 10, airTempInlet: '150 - 250°C', footprintMeters: '2.5 × 2.0 × 3.8', suitableFor: 'Pilot & R&D Laboratories' },
  { model: 'VSD-25', waterEvap: 25, airTempInlet: '160 - 280°C', footprintMeters: '3.5 × 2.8 × 4.8', suitableFor: 'Small Batch & High-Value Extracts' },
  { model: 'VSD-50', waterEvap: 50, airTempInlet: '180 - 300°C', footprintMeters: '4.5 × 3.5 × 6.2', suitableFor: 'Pharma & Specialty Chemicals' },
  { model: 'VSD-100', waterEvap: 100, airTempInlet: '180 - 320°C', footprintMeters: '5.8 × 4.2 × 7.8', suitableFor: 'Food Egg Powder & Dairy Whey' },
  { model: 'VSD-250', waterEvap: 250, airTempInlet: '180 - 350°C', footprintMeters: '7.2 × 5.5 × 10.5', suitableFor: 'Industrial Metal Sulfates & Catalysts' },
  { model: 'VSD-500', waterEvap: 500, airTempInlet: '200 - 350°C', footprintMeters: '9.0 × 6.8 × 13.5', suitableFor: 'Large Chemical & Ceramic Plants' },
  { model: 'VSD-1000', waterEvap: 1000, airTempInlet: '200 - 350°C', footprintMeters: '12.0 × 9.0 × 17.5', suitableFor: 'Heavy Detergents & Mineral Flotation' }
];
