import React from 'react';
import CodeBlock from '../CodeBlock';

const Iconography: React.FC = () => {
  const iconCategories = [
    {
      name: 'Arrows',
      icons: [
        'pi-angle-double-right', 'pi-angle-left', 'pi-angle-up', 'pi-angle-down', 'pi-angle-right',
        'pi-arrow-up', 'pi-arrow-down', 'pi-arrow-left', 'pi-arrow-right', 'pi-arrow-up-left',
        'pi-arrow-down-left', 'pi-arrow-up-right', 'pi-arrow-down-right', 'pi-sort', 'pi-sort-up',
        'pi-sort-down', 'pi-external-link', 'pi-refresh', 'pi-replay', 'pi-undo'
      ]
    },
    {
      name: 'Brands',
      icons: [
        'pi-amazon', 'pi-apple', 'pi-android', 'pi-google', 'pi-microsoft', 'pi-paypal',
        'pi-twitter', 'pi-facebook', 'pi-github', 'pi-slack', 'pi-discord', 'pi-youtube',
        'pi-vimeo', 'pi-instagram', 'pi-linkedin', 'pi-whatsapp'
      ]
    },
    {
      name: 'Communication',
      icons: [
        'pi-comment', 'pi-comments', 'pi-envelope', 'pi-send', 'pi-phone', 'pi-mobile',
        'pi-microphone', 'pi-video', 'pi-volume-up', 'pi-volume-down', 'pi-volume-off',
        'pi-wifi', 'pi-bluetooth', 'pi-broadcast', 'pi-bullhorn'
      ]
    },
    {
      name: 'Design',
      icons: ['pi-palette', 'pi-pencil']
    },
    {
      name: 'Devices',
      icons: ['pi-desktop', 'pi-tablet', 'pi-mobile']
    },
    {
      name: 'Documents',
      icons: [
        'pi-file', 'pi-file-pdf', 'pi-file-excel', 'pi-file-word', 'pi-folder', 'pi-folder-open',
        'pi-copy', 'pi-clipboard', 'pi-book', 'pi-bookmark', 'pi-image', 'pi-images',
        'pi-download', 'pi-upload', 'pi-cloud', 'pi-cloud-download', 'pi-cloud-upload'
      ]
    },
    {
      name: 'E-Commerce',
      icons: [
        'pi-shopping-cart', 'pi-shopping-bag', 'pi-credit-card', 'pi-money-bill',
        'pi-wallet', 'pi-gift', 'pi-tag', 'pi-tags', 'pi-barcode'
      ]
    },
    {
      name: 'Graphs',
      icons: ['pi-chart-line', 'pi-chart-bar', 'pi-chart-pie']
    },
    {
      name: 'Map',
      icons: [
        'pi-map', 'pi-map-marker', 'pi-compass', 'pi-globe', 'pi-building',
        'pi-home', 'pi-directions', 'pi-car', 'pi-truck'
      ]
    },
    {
      name: 'Math',
      icons: [
        'pi-plus', 'pi-minus', 'pi-times', 'pi-percentage', 'pi-calculator',
        'pi-equals', 'pi-dollar', 'pi-euro', 'pi-pound'
      ]
    },
    {
      name: 'Media',
      icons: [
        'pi-play', 'pi-pause', 'pi-stop', 'pi-step-backward', 'pi-step-forward',
        'pi-fast-backward', 'pi-fast-forward', 'pi-eject', 'pi-forward',
        'pi-backward', 'pi-repeat', 'pi-random', 'pi-camera', 'pi-video'
      ]
    },
    {
      name: 'Misc',
      icons: [
        'pi-bell', 'pi-heart', 'pi-star', 'pi-thumbs-up', 'pi-thumbs-down',
        'pi-flag', 'pi-bookmark', 'pi-crown', 'pi-key', 'pi-lock', 'pi-unlock',
        'pi-shield', 'pi-eye', 'pi-eye-slash', 'pi-lightbulb'
      ]
    },
    {
      name: 'Editor',
      icons: [
        'pi-align-left', 'pi-align-center', 'pi-align-right', 'pi-align-justify',
        'pi-bold', 'pi-italic', 'pi-underline', 'pi-list', 'pi-link'
      ]
    },
    {
      name: 'Sort',
      icons: [
        'pi-sort', 'pi-sort-up', 'pi-sort-down', 'pi-sort-alpha-up', 'pi-sort-alpha-down',
        'pi-sort-numeric-up', 'pi-sort-numeric-down', 'pi-sort-amount-up', 'pi-sort-amount-down'
      ]
    },
    {
      name: 'Symbols',
      icons: [
        'pi-at', 'pi-hashtag', 'pi-question-circle', 'pi-info-circle', 'pi-exclamation-triangle',
        'pi-check-circle', 'pi-times-circle', 'pi-ban', 'pi-circle'
      ]
    },
    {
      name: 'System',
      icons: [
        'pi-cog', 'pi-cogs', 'pi-wrench', 'pi-sliders-h', 'pi-sliders-v',
        'pi-database', 'pi-server', 'pi-hdd', 'pi-memory', 'pi-cpu',
        'pi-power-off', 'pi-save', 'pi-trash', 'pi-search', 'pi-filter'
      ]
    },
    {
      name: 'Time',
      icons: [
        'pi-clock', 'pi-stopwatch', 'pi-calendar', 'pi-calendar-plus',
        'pi-calendar-minus', 'pi-calendar-times', 'pi-history'
      ]
    },
    {
      name: 'Users',
      icons: [
        'pi-user', 'pi-users', 'pi-user-plus', 'pi-user-minus',
        'pi-user-edit', 'pi-id-card'
      ]
    }
  ];

  const installCode = `# Install PrimeIcons
npm install primeicons

# Or via CDN
<link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css">`;

  const usageCode = `<!-- HTML Usage -->
<i class="pi pi-check"></i>
<i class="pi pi-times"></i>
<i class="pi pi-user"></i>

<!-- React Usage -->
<i className="pi pi-check"></i>
<i className="pi pi-times"></i>
<i className="pi pi-user"></i>

<!-- With custom styling -->
<i className="pi pi-heart text-red-500 text-2xl"></i>`;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Iconography</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          Below is the PrimeOne iconography. Please install the library from the link below to be able to use within our design system.
          PrimeIcons is the default icon library of Prime UI libraries with over 400 open source icons developed by PrimeTek. See the
          guide below to setup PrimeIcons for Figma.
        </p>
        
        <div className="flex space-x-4">
          <a 
            href="https://github.com/primefaces/primeicons" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 transition-colors text-body-normal-regular underline"
          >
            View PrimeNG library
          </a>
          <a 
            href="https://www.primefaces.org/primeicons/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 transition-colors text-body-normal-regular underline"
          >
            PrimeIcons Guide
          </a>
        </div>
      </div>

      {/* Installation */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Installation</h2>
        <div className="bg-white border border-surface-300 rounded-lg">
          <CodeBlock
            language="bash"
            code={installCode}
          />
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Usage</h2>
        <div className="bg-white border border-surface-300 rounded-lg">
          <CodeBlock
            language="html"
            code={usageCode}
          />
        </div>
      </div>

      {/* Icon Categories */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Icon Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {iconCategories.map((category) => (
            <div key={category.name} className="bg-white border border-surface-300 rounded-lg">
              <div className="bg-surface-800 text-white px-6 py-4 rounded-t-lg">
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-6 gap-4">
                  {category.icons.map((iconClass) => (
                    <div
                      key={iconClass}
                      className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-surface-50 transition-colors cursor-pointer group"
                      title={iconClass}
                    >
                      <i className={`pi ${iconClass} text-2xl text-navy-500 group-hover:text-primary-500 transition-colors`}></i>
                      <span className="text-xs text-navy-600 text-center leading-tight">
                        {iconClass.replace('pi-', '')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Icon Sizes */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Icon Sizes</h2>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="pi pi-heart text-sm text-primary-500 mb-2"></i>
              <div className="text-body-small-regular text-navy-600">Small (14px)</div>
              <div className="text-body-xsmall-regular text-navy-600 font-mono">text-sm</div>
            </div>
            <div className="text-center">
              <i className="pi pi-heart text-base text-primary-500 mb-2"></i>
              <div className="text-body-small-regular text-navy-600">Base (16px)</div>
              <div className="text-body-xsmall-regular text-navy-600 font-mono">text-base</div>
            </div>
            <div className="text-center">
              <i className="pi pi-heart text-2xl text-primary-500 mb-2"></i>
              <div className="text-body-small-regular text-navy-600">Large (24px)</div>
              <div className="text-body-xsmall-regular text-navy-600 font-mono">text-2xl</div>
            </div>
            <div className="text-center">
              <i className="pi pi-heart text-4xl text-primary-500 mb-2"></i>
              <div className="text-body-small-regular text-navy-600">XLarge (36px)</div>
              <div className="text-body-xsmall-regular text-navy-600 font-mono">text-4xl</div>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Colors */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Icon Colors</h2>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <i className="pi pi-check text-3xl text-green-500"></i>
              <div className="text-body-small-regular text-navy-600">Success</div>
              <div className="text-body-xsmall-regular text-navy-600 font-mono">text-green-500</div>
            </div>
            <div className="text-center space-y-3">
              <i className="pi pi-info-circle text-3xl text-blue-500"></i>
              <div className="text-body-small-regular text-navy-600">Information</div>
              <div className="text-body-xsmall-regular text-navy-600 font-mono">text-blue-500</div>
            </div>
            <div className="text-center space-y-3">
              <i className="pi pi-exclamation-triangle text-3xl text-yellow-500"></i>
              <div className="text-body-small-regular text-navy-600">Warning</div>
              <div className="text-body-xsmall-regular text-navy-600 font-mono">text-yellow-500</div>
            </div>
            <div className="text-center space-y-3">
              <i className="pi pi-times-circle text-3xl text-red-500"></i>
              <div className="text-body-small-regular text-navy-600">Error</div>
              <div className="text-body-xsmall-regular text-navy-600 font-mono">text-red-500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iconography;