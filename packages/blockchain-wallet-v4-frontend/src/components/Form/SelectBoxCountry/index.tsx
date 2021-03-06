import React from 'react'
import { FormattedMessage } from 'react-intl'

import SelectBox from '../SelectBox'

export const whiteBlackListsConflictMessage =
  'Cannot use both blacklist and whitelist in SelectBoxCountry component'

type Country = {
  emoji: string
  text: string
  value: string
}

export const countries: Country[] = [
  {
    emoji: '๐ฆ๐ฉ',
    text: 'Andorra',
    value: 'AD'
  },
  {
    emoji: '๐ฆ๐ช',
    text: 'United Arab Emirates',
    value: 'AE'
  },
  {
    emoji: '๐ฆ๐ฌ',
    text: 'Antigua and Barbuda',
    value: 'AG'
  },
  {
    emoji: '๐ฆ๐ฎ',
    text: 'Anguilla',
    value: 'AI'
  },
  {
    emoji: '๐ฆ๐ฑ',
    text: 'Albania',
    value: 'AL'
  },
  {
    emoji: '๐ฆ๐ด',
    text: 'Armenia',
    value: 'AM'
  },
  {
    emoji: '๐ฆ๐ด',
    text: 'Angola',
    value: 'AO'
  },
  {
    emoji: '๐ฆ๐ท',
    text: 'Argentina',
    value: 'AR'
  },
  {
    emoji: '๐ฆ๐ธ',
    text: 'American Samoa',
    value: 'AS'
  },
  {
    emoji: '๐ฆ๐น',
    text: 'Austria',
    value: 'AT'
  },
  {
    emoji: '๐ฆ๐บ',
    text: 'Australia',
    value: 'AU'
  },
  {
    emoji: '๐ฆ๐ผ',
    text: 'Aruba',
    value: 'AW'
  },
  {
    emoji: '๐ฆ๐ฟ',
    text: 'Azerbaijan',
    value: 'AZ'
  },
  {
    emoji: '๐ง๐ฆ',
    text: 'Bosnia and Herzegovina',
    value: 'BA'
  },
  {
    emoji: '๐ง๐ง',
    text: 'Barbados',
    value: 'BB'
  },
  {
    emoji: '๐ง๐ฉ',
    text: 'Bangladesh',
    value: 'BD'
  },
  {
    emoji: '๐ง๐พ',
    text: 'Belarus',
    value: 'BY'
  },
  {
    emoji: '๐ง๐ช',
    text: 'Belgium',
    value: 'BE'
  },
  {
    emoji: '๐ง๐ซ',
    text: 'Burkina Faso',
    value: 'BF'
  },
  {
    emoji: '๐ง๐ฌ',
    text: 'Bulgaria',
    value: 'BG'
  },
  {
    emoji: '๐ง๐ญ',
    text: 'Bahrain',
    value: 'BH'
  },
  {
    emoji: '๐ง๐ฎ',
    text: 'Burundi',
    value: 'BI'
  },
  {
    emoji: '๐ง๐ฏ',
    text: 'Benin',
    value: 'BJ'
  },
  {
    emoji: '๐ง๐ฑ',
    text: 'Saint Barthรฉlemy',
    value: 'BL'
  },
  {
    emoji: '๐ง๐ฒ',
    text: 'Bermuda',
    value: 'BM'
  },
  {
    emoji: '๐ง๐ณ',
    text: 'Brunei Darussalam',
    value: 'BN'
  },
  {
    emoji: '๐ง๐ด',
    text: 'Bolivia',
    value: 'BO'
  },
  {
    emoji: '๐ง๐ถ',
    text: 'Bonaire, Sint Eustatius and Saba',
    value: 'BQ'
  },
  {
    emoji: '๐ง๐ท',
    text: 'Brazil',
    value: 'BR'
  },
  {
    emoji: '๐ง๐ธ',
    text: 'Bahamas',
    value: 'BS'
  },
  {
    emoji: '๐ง๐น',
    text: 'Bhutan',
    value: 'BT'
  },
  {
    emoji: '๐ง๐ป',
    text: 'Bouvet Island',
    value: 'BV'
  },
  {
    emoji: '๐ง๐ผ',
    text: 'Botswana',
    value: 'BW'
  },
  {
    emoji: '๐ง๐ฟ',
    text: 'Belize',
    value: 'BZ'
  },
  {
    emoji: '๐จ๐ฆ',
    text: 'Canada',
    value: 'CA'
  },
  {
    emoji: '๐จ๐จ',
    text: 'Cocos (Keeling) Islands',
    value: 'CC'
  },
  {
    emoji: '๐จ๐ญ',
    text: 'Switzerland',
    value: 'CH'
  },
  {
    emoji: '๐จ๐ฐ',
    text: 'Cook Islands',
    value: 'CK'
  },
  {
    emoji: '๐จ๐ฑ',
    text: 'Chile',
    value: 'CL'
  },
  {
    emoji: '๐จ๐ฒ',
    text: 'Cameroon',
    value: 'CM'
  },
  {
    emoji: '๐จ๐ณ',
    text: 'China',
    value: 'CN'
  },
  {
    emoji: '๐จ๐ด',
    text: 'Colombia',
    value: 'CO'
  },
  {
    emoji: '๐จ๐ท',
    text: 'Costa Rica',
    value: 'CR'
  },
  {
    emoji: '๐จ๐ป',
    text: 'Cape Verde',
    value: 'CV'
  },
  {
    emoji: '๐จ๐ผ',
    text: 'Curaรงao',
    value: 'CW'
  },
  {
    emoji: '๐จ๐ฝ',
    text: 'Christmas Island',
    value: 'CX'
  },
  {
    emoji: '๐จ๐พ',
    text: 'Cyprus',
    value: 'CY'
  },
  {
    emoji: '๐จ๐ฟ',
    text: 'Czech Republic',
    value: 'CZ'
  },
  {
    emoji: '๐ฉ๐ช',
    text: 'Germany',
    value: 'DE'
  },
  {
    emoji: '๐ฉ๐ฏ',
    text: 'Djibouti',
    value: 'DJ'
  },
  {
    emoji: '๐ฉ๐ฐ',
    text: 'Denmark',
    value: 'DK'
  },
  {
    emoji: '๐ฉ๐ฒ',
    text: 'Dominica',
    value: 'DM'
  },
  {
    emoji: '๐ฉ๐ด',
    text: 'Dominican Republic',
    value: 'DO'
  },
  {
    emoji: '๐ฉ๐ฟ',
    text: 'Algeria',
    value: 'DZ'
  },
  {
    emoji: '๐ช๐จ',
    text: 'Ecuador',
    value: 'EC'
  },
  {
    emoji: '๐ช๐ช',
    text: 'Estonia',
    value: 'EE'
  },
  {
    emoji: '๐ช๐ฌ',
    text: 'Egypt',
    value: 'EG'
  },
  {
    emoji: '๐ช๐ญ',
    text: 'Western Sahara',
    value: 'EH'
  },
  {
    emoji: '๐ช๐ธ',
    text: 'Spain',
    value: 'ES'
  },
  {
    emoji: '๐ช๐น',
    text: 'Ethiopia',
    value: 'ET'
  },
  {
    emoji: '๐ซ๐ฎ',
    text: 'Finland',
    value: 'FI'
  },
  {
    emoji: '๐ซ๐ฏ',
    text: 'Fiji',
    value: 'FJ'
  },
  {
    emoji: '๐ซ๐ฐ',
    text: 'Falkland Islands (Malvinas)',
    value: 'FK'
  },
  {
    emoji: '๐ซ๐ฒ',
    text: 'Micronesia',
    value: 'FM'
  },
  {
    emoji: '๐ซ๐ด',
    text: 'Faroe Islands',
    value: 'FO'
  },
  {
    emoji: '๐ซ๐ท',
    text: 'France',
    value: 'FR'
  },
  {
    emoji: '๐ฌ๐ฆ',
    text: 'Gabon',
    value: 'GA'
  },
  {
    emoji: '๐ฌ๐ง',
    text: 'United Kingdom',
    value: 'GB'
  },
  {
    emoji: '๐ฌ๐ฉ',
    text: 'Grenada',
    value: 'GD'
  },
  {
    emoji: '๐ฌ๐ช',
    text: 'Georgia',
    value: 'GE'
  },
  {
    emoji: '๐ฌ๐ซ',
    text: 'French Guiana',
    value: 'GF'
  },
  {
    emoji: '๐ฌ๐ฌ',
    text: 'Guernsey',
    value: 'GG'
  },
  {
    emoji: '๐ฌ๐ญ',
    text: 'Ghana',
    value: 'GH'
  },
  {
    emoji: '๐ฌ๐ฎ',
    text: 'Gibraltar',
    value: 'GI'
  },
  {
    emoji: '๐ฌ๐ฑ',
    text: 'Greenland',
    value: 'GL'
  },
  {
    emoji: '๐ฌ๐ฒ',
    text: 'Gambia',
    value: 'GM'
  },
  {
    emoji: '๐ฌ๐ต',
    text: 'Guadeloupe',
    value: 'GP'
  },
  {
    emoji: '๐ฌ๐ท',
    text: 'Greece',
    value: 'GR'
  },
  {
    emoji: '๐ฌ๐ธ',
    text: 'South Georgia',
    value: 'GS'
  },
  {
    emoji: '๐ฌ๐น',
    text: 'Guatemala',
    value: 'GT'
  },
  {
    emoji: '๐ฌ๐บ',
    text: 'Guam',
    value: 'GU'
  },
  {
    emoji: '๐ฌ๐พ',
    text: 'Guyana',
    value: 'GY'
  },
  {
    emoji: '๐ญ๐ฐ',
    text: 'Hong Kong',
    value: 'HK'
  },
  {
    emoji: '๐ญ๐ฒ',
    text: 'Heard Island and Mcdonald Islands',
    value: 'HM'
  },
  {
    emoji: '๐ญ๐ณ',
    text: 'Honduras',
    value: 'HN'
  },

  {
    emoji: '๐ญ๐ท',
    text: 'Croatia',
    value: 'HR'
  },
  {
    emoji: '๐ญ๐น',
    text: 'Haiti',
    value: 'HT'
  },
  {
    emoji: '๐ญ๐บ',
    text: 'Hungary',
    value: 'HU'
  },
  {
    emoji: '๐ฎ๐ฉ',
    text: 'Indonesia',
    value: 'ID'
  },
  {
    emoji: '๐ฎ๐ช',
    text: 'Ireland',
    value: 'IE'
  },
  {
    emoji: '๐ฎ๐ฑ',
    text: 'Israel',
    value: 'IL'
  },
  {
    emoji: '๐ฎ๐ฒ',
    text: 'Isle of Man',
    value: 'IM'
  },
  {
    emoji: '๐ฎ๐ณ',
    text: 'India',
    value: 'IN'
  },
  {
    emoji: '๐ฎ๐ด',
    text: 'British Indian Ocean Territory',
    value: 'IO'
  },
  {
    emoji: '๐ฎ๐ธ',
    text: 'Iceland',
    value: 'IS'
  },
  {
    emoji: '๐ฎ๐น',
    text: 'Italy',
    value: 'IT'
  },
  {
    emoji: '๐ฏ๐ช',
    text: 'Jersey',
    value: 'JE'
  },
  {
    emoji: '๐ฏ๐ฒ',
    text: 'Jamaica',
    value: 'JM'
  },
  {
    emoji: '๐ฏ๐ด',
    text: 'Jordan',
    value: 'JO'
  },
  {
    emoji: '๐ฏ๐ต',
    text: 'Japan',
    value: 'JP'
  },
  {
    emoji: '๐ฐ๐ช',
    text: 'Kenya',
    value: 'KE'
  },

  {
    emoji: '๐ฐ๐ฌ',
    text: 'Kyrgyzstan',
    value: 'KG'
  },
  {
    emoji: '๐ฐ๐ญ',
    text: 'Cambodia',
    value: 'KH'
  },
  {
    emoji: '๐ฐ๐ฎ',
    text: 'Kiribati',
    value: 'KI'
  },
  {
    emoji: '๐ฐ๐ฒ',
    text: 'Comoros',
    value: 'KM'
  },
  {
    emoji: '๐ฐ๐ณ',
    text: 'Saint Kitts and Nevis',
    value: 'KN'
  },
  {
    emoji: '๐ฐ๐ท',
    text: 'South Korea',
    value: 'KR'
  },
  {
    emoji: '๐ฐ๐ผ',
    text: 'Kuwait',
    value: 'KW'
  },
  {
    emoji: '๐ฐ๐พ',
    text: 'Cayman Islands',
    value: 'KY'
  },
  {
    emoji: '๐ฐ๐ฟ',
    text: 'Kazakhstan',
    value: 'KZ'
  },
  {
    emoji: '๐ฑ๐ฆ',
    text: "Lao People's Democratic Republic",
    value: 'LA'
  },
  {
    emoji: '๐ฑ๐จ',
    text: 'Saint Lucia',
    value: 'LC'
  },
  {
    emoji: '๐ฑ๐ฎ',
    text: 'Liechtenstein',
    value: 'LI'
  },
  {
    emoji: '๐ฑ๐ฐ',
    text: 'Sri Lanka',
    value: 'LK'
  },
  {
    emoji: '๐ฑ๐ธ',
    text: 'Lesotho',
    value: 'LS'
  },
  {
    emoji: '๐ฑ๐น',
    text: 'Lithuania',
    value: 'LT'
  },
  {
    emoji: '๐ฑ๐บ',
    text: 'Luxembourg',
    value: 'LU'
  },

  {
    emoji: '๐ฑ๐ป',
    text: 'Latvia',
    value: 'LV'
  },
  {
    emoji: '๐ฒ๐ฆ',
    text: 'Morocco',
    value: 'MA'
  },
  {
    emoji: '๐ฒ๐จ',
    text: 'Monaco',
    value: 'MC'
  },
  {
    emoji: '๐ฒ๐ฉ',
    text: 'Moldova',
    value: 'MD'
  },
  {
    emoji: '๐ฒ๐ช',
    text: 'Montenegro',
    value: 'ME'
  },
  {
    emoji: '๐ฒ๐ซ',
    text: 'Saint Martin (French Part)',
    value: 'MF'
  },
  {
    emoji: '๐ฒ๐ฌ',
    text: 'Madagascar',
    value: 'MG'
  },
  {
    emoji: '๐ฒ๐ญ',
    text: 'Marshall Islands',
    value: 'MH'
  },
  {
    emoji: '๐ฒ๐ฐ',
    text: 'Macedonia',
    value: 'MK'
  },
  {
    emoji: '๐ฒ๐ฑ',
    text: 'Mali',
    value: 'ML'
  },
  {
    emoji: '๐ฒ๐ณ',
    text: 'Mongolia',
    value: 'MN'
  },
  {
    emoji: '๐ฒ๐ด',
    text: 'Macao',
    value: 'MO'
  },
  {
    emoji: '๐ฒ๐ต',
    text: 'Northern Mariana Islands',
    value: 'MP'
  },
  {
    emoji: '๐ฒ๐ถ',
    text: 'Martinique',
    value: 'MQ'
  },
  {
    emoji: '๐ฒ๐ท',
    text: 'Mauritania',
    value: 'MR'
  },
  {
    emoji: '๐ฒ๐ธ',
    text: 'Montserrat',
    value: 'MS'
  },
  {
    emoji: '๐ฒ๐น',
    text: 'Malta',
    value: 'MT'
  },
  {
    emoji: '๐ฒ๐บ',
    text: 'Mauritius',
    value: 'MU'
  },
  {
    emoji: '๐ฒ๐ป',
    text: 'Maldives',
    value: 'MV'
  },
  {
    emoji: '๐ฒ๐ผ',
    text: 'Malawi',
    value: 'MW'
  },
  {
    emoji: '๐ฒ๐ฝ',
    text: 'Mexico',
    value: 'MX'
  },
  {
    emoji: '๐ฒ๐พ',
    text: 'Malaysia',
    value: 'MY'
  },
  {
    emoji: '๐ฒ๐ฟ',
    text: 'Mozambique',
    value: 'MZ'
  },
  {
    emoji: '๐ณ๐ฆ',
    text: 'Namibia',
    value: 'NA'
  },
  {
    emoji: '๐ณ๐จ',
    text: 'New Caledonia',
    value: 'NC'
  },
  {
    emoji: '๐ณ๐ช',
    text: 'Niger',
    value: 'NE'
  },
  {
    emoji: '๐ณ๐ซ',
    text: 'Norfolk Island',
    value: 'NF'
  },
  {
    emoji: '๐ณ๐ฌ',
    text: 'Nigeria',
    value: 'NG'
  },
  {
    emoji: '๐ณ๐ฎ',
    text: 'Nicaragua',
    value: 'NI'
  },
  {
    emoji: '๐ณ๐ฑ',
    text: 'Netherlands',
    value: 'NL'
  },
  {
    emoji: '๐ณ๐ด',
    text: 'Norway',
    value: 'NO'
  },
  {
    emoji: '๐ณ๐ต',
    text: 'Nepal',
    value: 'NP'
  },
  {
    emoji: '๐ณ๐ท',
    text: 'Nauru',
    value: 'NR'
  },
  {
    emoji: '๐ณ๐บ',
    text: 'Niue',
    value: 'NU'
  },
  {
    emoji: '๐ณ๐ฟ',
    text: 'New Zealand',
    value: 'NZ'
  },
  {
    emoji: '๐ด๐ฒ',
    text: 'Oman',
    value: 'OM'
  },
  {
    emoji: '๐ต๐ฆ',
    text: 'Panama',
    value: 'PA'
  },
  {
    emoji: '๐ต๐ช',
    text: 'Peru',
    value: 'PE'
  },
  {
    emoji: '๐ต๐ซ',
    text: 'French Polynesia',
    value: 'PF'
  },
  {
    emoji: '๐ต๐ฌ',
    text: 'Papua New Guinea',
    value: 'PG'
  },
  {
    emoji: '๐ต๐ญ',
    text: 'Philippines',
    value: 'PH'
  },
  {
    emoji: '๐ต๐ฐ',
    text: 'Pakistan',
    value: 'PK'
  },
  {
    emoji: '๐ต๐ฑ',
    text: 'Poland',
    value: 'PL'
  },
  {
    emoji: '๐ต๐ฒ',
    text: 'Saint Pierre and Miquelon',
    value: 'PM'
  },
  {
    emoji: '๐ต๐ณ',
    text: 'Pitcairn',
    value: 'PN'
  },
  {
    emoji: '๐ต๐ท',
    text: 'Puerto Rico',
    value: 'PR'
  },
  {
    emoji: '๐ต๐ธ',
    text: 'Palestinian Territory',
    value: 'PS'
  },
  {
    emoji: '๐ต๐น',
    text: 'Portugal',
    value: 'PT'
  },
  {
    emoji: '๐ต๐ผ',
    text: 'Palau',
    value: 'PW'
  },
  {
    emoji: '๐ต๐พ',
    text: 'Paraguay',
    value: 'PY'
  },
  {
    emoji: '๐ท๐บ',
    text: 'Russia',
    value: 'RU'
  },
  {
    emoji: '๐ถ๐ฆ',
    text: 'Qatar',
    value: 'QA'
  },
  {
    emoji: '๐ท๐ช',
    text: 'Rรฉunion',
    value: 'RE'
  },
  {
    emoji: '๐ท๐ด',
    text: 'Romania',
    value: 'RO'
  },
  {
    emoji: '๐ท๐ธ',
    text: 'Serbia',
    value: 'RS'
  },
  {
    emoji: '๐ท๐ผ',
    text: 'Rwanda',
    value: 'RW'
  },
  {
    emoji: '๐ธ๐ฆ',
    text: 'Saudi Arabia',
    value: 'SA'
  },
  {
    emoji: '๐ธ๐ง',
    text: 'Solomon Islands',
    value: 'SB'
  },
  {
    emoji: '๐ธ๐จ',
    text: 'Seychelles',
    value: 'SC'
  },
  {
    emoji: '๐ธ๐ช',
    text: 'Sweden',
    value: 'SE'
  },
  {
    emoji: '๐ธ๐ฌ',
    text: 'Singapore',
    value: 'SG'
  },
  {
    emoji: '๐ธ๐ญ',
    text: 'Saint Helena, Ascension and Tristan Da Cunha',
    value: 'SH'
  },
  {
    emoji: '๐ธ๐ฎ',
    text: 'Slovenia',
    value: 'SI'
  },
  {
    emoji: '๐ธ๐ฐ',
    text: 'Slovakia',
    value: 'SK'
  },
  {
    emoji: '๐ธ๐ฑ',
    text: 'Sierra Leone',
    value: 'SL'
  },
  {
    emoji: '๐ธ๐ฒ',
    text: 'San Marino',
    value: 'SM'
  },
  {
    emoji: '๐ธ๐ณ',
    text: 'Senegal',
    value: 'SN'
  },
  {
    emoji: '๐ธ๐ท',
    text: 'Suriname',
    value: 'SR'
  },
  {
    emoji: '๐ธ๐น',
    text: 'Sao Tome and Principe',
    value: 'ST'
  },
  {
    emoji: '๐ธ๐ป',
    text: 'El Salvador',
    value: 'SV'
  },
  {
    emoji: '๐ธ๐ฝ',
    text: 'Sint Maarten (Dutch Part)',
    value: 'SX'
  },
  {
    emoji: '๐ธ๐ฟ',
    text: 'Swaziland',
    value: 'SZ'
  },
  {
    emoji: '๐น๐จ',
    text: 'Turks and Caicos Islands',
    value: 'TC'
  },
  {
    emoji: '๐น๐ฉ',
    text: 'Chad',
    value: 'TD'
  },
  {
    emoji: '๐น๐ซ',
    text: 'French Southern Territories',
    value: 'TF'
  },
  {
    emoji: '๐น๐ฌ',
    text: 'Togo',
    value: 'TG'
  },
  {
    emoji: '๐น๐ญ',
    text: 'Thailand',
    value: 'TH'
  },
  {
    emoji: '๐น๐ฏ',
    text: 'Tajikistan',
    value: 'TJ'
  },
  {
    emoji: '๐น๐ฐ',
    text: 'Tokelau',
    value: 'TK'
  },
  {
    emoji: '๐น๐ฑ',
    text: 'Timor-Leste',
    value: 'TL'
  },
  {
    emoji: '๐น๐ฒ',
    text: 'Turkmenistan',
    value: 'TM'
  },
  {
    emoji: '๐น๐ด',
    text: 'Tonga',
    value: 'TO'
  },
  {
    emoji: '๐น๐ท',
    text: 'Turkey',
    value: 'TR'
  },
  {
    emoji: '๐น๐น',
    text: 'Trinidad and Tobago',
    value: 'TT'
  },
  {
    emoji: '๐น๐ป',
    text: 'Tuvalu',
    value: 'TV'
  },
  {
    emoji: '๐น๐ผ',
    text: 'Taiwan',
    value: 'TW'
  },
  {
    emoji: '๐น๐ฟ',
    text: 'Tanzania',
    value: 'TZ'
  },
  {
    emoji: '๐บ๐ฆ',
    text: 'Ukraine',
    value: 'UA'
  },
  {
    emoji: '๐บ๐ฌ',
    text: 'Uganda',
    value: 'UG'
  },
  {
    emoji: '๐บ๐ฒ',
    text: 'United States Minor Outlying Islands',
    value: 'UM'
  },
  {
    emoji: '๐บ๐ธ',
    text: 'United States',
    value: 'US'
  },
  {
    emoji: '๐บ๐พ',
    text: 'Uruguay',
    value: 'UY'
  },
  {
    emoji: '๐บ๐ฟ',
    text: 'Uzbekistan',
    value: 'UZ'
  },
  {
    emoji: '๐ป๐จ',
    text: 'Saint Vincent and The Grenadines',
    value: 'VC'
  },
  {
    emoji: '๐ป๐ฌ',
    text: 'Virgin Islands, British',
    value: 'VG'
  },
  {
    emoji: '๐ป๐ณ',
    text: 'Viet Nam',
    value: 'VN'
  },
  {
    emoji: '๐ป๐บ',
    text: 'Vanuatu',
    value: 'VU'
  },
  {
    emoji: '๐ผ๐ซ',
    text: 'Wallis and Futuna',
    value: 'WF'
  },
  {
    emoji: '๐ผ๐ธ',
    text: 'Samoa',
    value: 'WS'
  },
  {
    emoji: '๐พ๐น',
    text: 'Mayotte',
    value: 'YT'
  },
  {
    emoji: '๐ฟ๐ฆ',
    text: 'South Africa',
    value: 'ZA'
  },
  {
    emoji: '๐ฟ๐ฒ',
    text: 'Zambia',
    value: 'ZM'
  }
]

type Props = {
  blackList?: string[]
  whiteList?: string[]
}

const applyWhiteBlackList = (whiteList: string[] | null, blackList: string[] | null) => {
  if (blackList && whiteList) {
    throw new Error(whiteBlackListsConflictMessage)
  }
  let allCountries = countries

  if (blackList) {
    allCountries = allCountries.filter((item) => blackList.includes(item.value))
  }
  if (whiteList) {
    allCountries = allCountries.filter((item) => !whiteList.includes(item.value))
  }

  // we order all countries on text
  return allCountries.sort(function (a, b) {
    if (a.text < b.text) {
      return -1
    }
    if (a.text > b.text) {
      return 1
    }
    return 0
  })
}

const SelectBoxCountry = (props: Props) => {
  const { blackList = null, whiteList = null, ...rest } = props
  const elements = [
    {
      group: '',
      items: applyWhiteBlackList(whiteList, blackList)
    }
  ]

  return (
    <SelectBox
      label={
        <FormattedMessage id='components.selectboxcountry.label' defaultMessage='Select country' />
      }
      elements={elements}
      {...rest}
    />
  )
}

export default SelectBoxCountry
