import { HttpClient } from '@angular/common/http';

export function GetDayName(day: number): string {
  switch (day) {
    case 0:
      return 'Su';
    case 1:
      return 'Mo';
    case 2:
      return 'Tu';
    case 3:
      return 'We';
    case 4:
      return 'Th';
    case 5:
      return 'Fr';
    case 6:
      return 'Sa';
    default:
      return day.toString();
  }
}

export const getChairImageAccrdingToStatus: { [key: number]: string } = {
  16: '../../../../../../../../assets/images/char-green.svg',
  17: '../../../../../../../../assets/images/char-blue.svg',
  18: '../../../../../../../../assets/images/char-golden.svg',
  19: '../../../../../../../../assets/images/char.svg',
  20: '../../../../../../../../assets/images/char-red.svg',
  0: '../../../../../../../../assets/images/char.svg',
};

export const getChairImageAccedingToColor = {
  green: '/assets/images/char-green.svg',
  blue: '/assets/images/char-blue.svg',
  golden: '/assets/images/char-golden.svg',
  default: '/assets/images/char-default.svg',
  red: '/assets/images/char-red.svg',
  black: '/assets/images/char-black.svg',
};

export function GenerateToFormData(model: any): FormData {
  let formData = new FormData();
  for (const propName in model) {
    if (model.hasOwnProperty(propName)) {
      const propValue = model[propName];
      if (propValue != null) {
        if (typeof propValue != typeof File)
          formData.append(propName, `${propValue}`);
        else
          formData.append(propName, propValue);
      }
    }
  }
  return formData;
}