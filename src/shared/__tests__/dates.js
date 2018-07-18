import {
  getHoursMinutes,
  getHoursMinutesSeconds,
  convert12to24,
  convert24to12,
} from '../dates';

describe('getHoursMinutes', () => {
  it('returns proper hour and minute for a given date', () => {
    const date = new Date(2017, 0, 1, 16, 4);

    const hoursMinutes = getHoursMinutes(date);

    expect(hoursMinutes).toBe('16:04');
  });

  it('returns proper hour and minute for a given string of hour and minute', () => {
    const date = '16:04';

    const hoursMinutes = getHoursMinutes(date);

    expect(hoursMinutes).toBe('16:04');
  });

  it('returns proper hour and minute for a given string of hour, minute and second', () => {
    const date = '16:04:08';

    const hoursMinutes = getHoursMinutes(date);

    expect(hoursMinutes).toBe('16:04');
  });

  it('throws an error when given nonsense data', () => {
    const text = 'wololo';
    const flag = true;

    expect(() => getHoursMinutes(text)).toThrow();
    expect(() => getHoursMinutes(flag)).toThrow();
  });
});

describe('getHoursMinutesSeconds', () => {
  it('returns proper hour, minute and second for a given date', () => {
    const date = new Date(2017, 0, 1, 16, 4, 41);

    const hoursMinutesSeconds = getHoursMinutesSeconds(date);

    expect(hoursMinutesSeconds).toBe('16:04:41');
  });

  it('returns proper hour, minute and second for a given string of hour and minute', () => {
    const date = '16:04';

    const hoursMinutesSeconds = getHoursMinutesSeconds(date);

    expect(hoursMinutesSeconds).toBe('16:04:00');
  });

  it('returns proper hour, minute and second for a given string of hour, minute and second', () => {
    const date = '16:04:08';

    const hoursMinutesSeconds = getHoursMinutesSeconds(date);

    expect(hoursMinutesSeconds).toBe('16:04:08');
  });

  it('throws an error when given nonsense data', () => {
    const text = 'wololo';
    const flag = true;

    expect(() => getHoursMinutesSeconds(text)).toThrow();
    expect(() => getHoursMinutesSeconds(flag)).toThrow();
  });
});

describe('convert12to24', () => {
  it.each`
    hour12 | amPm    | hour24
    ${12}  | ${'am'} | ${0}
    ${1}   | ${'am'} | ${1}
    ${2}   | ${'am'} | ${2}
    ${3}   | ${'am'} | ${3}
    ${4}   | ${'am'} | ${4}
    ${5}   | ${'am'} | ${5}
    ${6}   | ${'am'} | ${6}
    ${7}   | ${'am'} | ${7}
    ${8}   | ${'am'} | ${8}
    ${9}   | ${'am'} | ${9}
    ${10}  | ${'am'} | ${10}
    ${11}  | ${'am'} | ${11}
    ${12}  | ${'pm'} | ${12}
    ${1}   | ${'pm'} | ${13}
    ${2}   | ${'pm'} | ${14}
    ${3}   | ${'pm'} | ${15}
    ${4}   | ${'pm'} | ${16}
    ${5}   | ${'pm'} | ${17}
    ${6}   | ${'pm'} | ${18}
    ${7}   | ${'pm'} | ${19}
    ${8}   | ${'pm'} | ${20}
    ${9}   | ${'pm'} | ${21}
    ${10}  | ${'pm'} | ${22}
    ${11}  | ${'pm'} | ${23}
  `('returns $hour24 for $hour12 $amPm',
  ({ hour12, amPm, hour24 }) => {
    expect(convert12to24(hour12, amPm)).toBe(hour24);
  });
});

describe('convert24to12', () => {
  it.each`
    hour24 | hour12 | amPm
    ${0}   | ${12}  | ${'am'}
    ${1}   | ${1}   | ${'am'}
    ${2}   | ${2}   | ${'am'}
    ${3}   | ${3}   | ${'am'}
    ${4}   | ${4}   | ${'am'}
    ${5}   | ${5}   | ${'am'}
    ${6}   | ${6}   | ${'am'}
    ${7}   | ${7}   | ${'am'}
    ${8}   | ${8}   | ${'am'}
    ${9}   | ${9}   | ${'am'}
    ${10}  | ${10}  | ${'am'}
    ${11}  | ${11}  | ${'am'}
    ${12}  | ${12}  | ${'pm'}
    ${13}  | ${1}   | ${'pm'}
    ${14}  | ${2}   | ${'pm'}
    ${15}  | ${3}   | ${'pm'}
    ${16}  | ${4}   | ${'pm'}
    ${17}  | ${5}   | ${'pm'}
    ${18}  | ${6}   | ${'pm'}
    ${19}  | ${7}   | ${'pm'}
    ${20}  | ${8}   | ${'pm'}
    ${21}  | ${9}   | ${'pm'}
    ${22}  | ${10}  | ${'pm'}
    ${23}  | ${11}  | ${'pm'}
  `('returns $hour12 $amPm for $hour24',
  ({ hour12, amPm, hour24 }) => {
    expect(convert24to12(hour24)).toEqual([hour12, amPm]);
  });
});
