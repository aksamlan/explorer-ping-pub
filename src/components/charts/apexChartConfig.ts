export default function getThemeConfig() {
  return {
    dark: false,
    colors: {
      background: '#E8F5E9',
      surface: '#A5D6A7',
      'surface-variant': '#81C784',
      'on-surface-variant': '#4CAF50',
      primary: chainStore.current?.themeColor || '#388E3C',
      'primary-darken-1': '#2E7D32',
      secondary: '#66BB6A',
      'secondary-darken-1': '#43A047',
      error: '#E53935',
      info: '#29B6F6',
      success: '#43A047',
      warning: '#FDD835',
      'on-primary': '#FFFFFF',
      'on-secondary': '#FFFFFF',
      'on-success': '#FFFFFF',
      'on-info': '#FFFFFF',
      'on-warning': '#FFFFFF',
      'on-background': '#2E7D32',
      'on-surface': '#2E7D32',
      'perfect-scrollbar-thumb': '#A5D6A7',
      'snackbar-background': '#388E3C',
      'tooltip-background': '#4CAF50',
      'alert-background': '#E8F5E9',
      'grey-50': '#E8F5E9',
      'grey-100': '#C8E6C9',
      'grey-200': '#A5D6A7',
      'grey-300': '#81C784',
      'grey-400': '#66BB6A',
      'grey-500': '#43A047',
      'grey-600': '#388E3C',
      'grey-700': '#2E7D32',
      'grey-800': '#1B5E20',
      'grey-900': '#004D40',
      'on-primary-darken-1': '#FFFFFF',
      'on-secondary-darken-1': '#FFFFFF',
      'on-error': '#FFFFFF',
      'on-perfect-scrollbar-thumb': '#004D40',
      'on-snackbar-background': '#FFFFFF',
      'on-tooltip-background': '#FFFFFF',
      'on-alert-background': '#004D40',
      'on-grey-50': '#004D40',
      'on-grey-100': '#004D40',
      'on-grey-200': '#004D40',
      'on-grey-300': '#004D40',
      'on-grey-400': '#FFFFFF',
      'on-grey-500': '#FFFFFF',
      'on-grey-600': '#FFFFFF',
      'on-grey-700': '#FFFFFF',
      'on-grey-800': '#FFFFFF',
      'on-grey-900': '#FFFFFF',
    },
    variables: {
      'border-color': '#2E7D32',
      'border-opacity': 0.12,
      'high-emphasis-opacity': 0.87,
      'medium-emphasis-opacity': 0.6,
      'activated-opacity': 0.12,
      'pressed-opacity': 0.12,
      'dragged-opacity': 0.08,
      'theme-kbd': '#2E7D32',
      'theme-on-kbd': '#FFFFFF',
      'theme-code': '#C8E6C9',
      'theme-on-code': '#004D40',
      'code-color': '#4CAF50',
      'overlay-scrim-background': '#388E3C',
      'overlay-scrim-opacity': 0.5,
      'shadow-key-umbra-opacity': 'rgba(var(--v-theme-on-surface), 0.08)',
      'shadow-key-penumbra-opacity': 'rgba(var(--v-theme-on-surface), 0.05)',
    },
  };
}


/// Price Chart config
export const getMarketPriceChartConfig = (
  theme: string,
  categories: string[]
) => {
  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } =
    colorVariables(theme);
  return {
    chart: {
      redrawOnParentResize: true,
      width: '100%',
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    tooltip: {
      theme: 'dark',
      shared: false,
    },
    dataLabels: { enabled: false },
    stroke: {
      // show: false,
      curve: 'smooth',
      width: 1.5,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      labels: { colors: themeSecondaryTextColor },
      markers: {
        offsetY: 1,
        offsetX: -3,
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    colors: [themeColors(theme).colors.primary],
    fill: {
      opacity: 0.5,
      type: 'gradient',
    },
    grid: {
      show: true,
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true },
      },
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor },
        formatter: function (value: string) {
          const pattern = Number(value) > 0.01 ? '0.0[0]a' : '0.00[000]';
          return numeral(value).format(pattern);
        },
      },
    },
    xaxis: {
      type: 'datetime',
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor },
      },
      labels: {
        style: { colors: themeDisabledTextColor },
      },
      categories,
    },
  };
};
// const donutColors = Array.from({length: 19}, () => (`#${Math.floor(Math.random()*16777215+100000).toString(16)}`))
const donutColors = ["#bbe81a", "#ff5f0b", "#43ebef", "#1999e5", "#230b2c", "#628be8", "#aa5343", "#c9fa89", "#e88ea8", "#72e4a2", "#38cd87", "#515e13", "#7bf8f5", "#83dd6e", "#e8b203", "#7d11d5", "#3e4927", "#f303e2", "#249493", "#50e5e6", "#11deb2", "#a2f9c7", "#2a7bdc", "#47383a", "#226da4", "#966319", "#1bdf99", "#f3ab0c", "#961f50", "#832efd", "#875287", "#4bebe7", "#1d3d2e", "#9caea4", "#2772f5", "#938bf1", "#6228a5", "#24fea5", "#c9bbc8", "#e27225", "#54bd9f", "#babb2d", "#bcf591", "#803b36", "#124f03"]
export const getDonutChartConfig = (
  theme: string,
  labels: string[]
) => {
  const { themeSecondaryTextColor, themePrimaryTextColor } =
    colorVariables(theme);
  return {
    stroke: { width: 0 },
    labels,
    colors: donutColors,
    // colors: [
    //   donutColors.series1,
    //   donutColors.series5,
    //   donutColors.series3,
    //   donutColors.series2,
    // ],
    dataLabels: {
      enabled: true,
      formatter: (val: string) => `${parseInt(val, 10)}%`,
    },
    legend: {
      position: 'bottom',
      markers: { offsetX: -3 },
      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1.5rem',
            },
            value: {
              fontSize: '1.5rem',
              color: themeSecondaryTextColor,
              formatter: (val: string) => `${parseInt(val, 10)}`,
            },
            total: {
              show: false,
              fontSize: '1.5rem',
              // label: 'Operational',
              // formatter: () => '31%',
              color: themePrimaryTextColor,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1rem',
                  },
                  value: {
                    fontSize: '1rem',
                  },
                  total: {
                    fontSize: '1rem',
                  },
                },
              },
            },
          },
        },
      },
    ],
  };
};
