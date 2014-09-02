(function($) {
    /**
     * Bulgarian language package
     * Translated by @mraiur
     */
    $.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n, {
        base64: {
            'default': 'Моля, въведете валиден base 64 кодиран'
        },
        between: {
            'default': 'Моля, въведете стойност между %s и %s',
            notInclusive: 'Моля, въведете стойност точно между %s и %s'
        },
        callback: {
            'default': 'Моля, въведете валидна стойност'
        },
        choice: {
            'default': 'Моля, въведете валидна стойност',
            less: 'Моля изберете минимална стойност %s',
            more: 'Моля изберете максимална стойност %s',
            between: 'Моля изберете от %s до %s стойност'
        },
        creditCard: {
            'default': 'Моля, въведете валиден номер на кредитна карта'
        },
        cusip: {
            'default': 'Моля, въведете валиден CUSIP номер'
        },
        cvv: {
            'default': 'Моля, въведете валиден CVV номер'
        },
        date: {
            'default': 'Моля, въведете валидна дата'
        },
        different: {
            'default': 'Моля, въведете различна стойност'
        },
        digits: {
             'default': 'Моля, въведете само цифри'
        },
        ean: {
            'default': 'Моля, въведете валиден EAN номер'
        },
        emailAddress: {
            'default': 'Моля, въведете валиден имейл адрес'
        },
        file: {
            'default': 'Моля, изберете валиден файл'
        },
        greaterThan: {
            'default': 'Моля, въведете стойност по-голяма от или равна на %s',
            notInclusive: 'Моля, въведете стойност по-голяма от %s'
        },
        grid: {
            'default': 'Моля, изберете валиден GRId номер'
        },
        hex: {
            'default': 'Моля, въведете валиден шестнадесетичен номер'
        },
        hexColor: {
            'default': 'Моля, въведете валиден шестнадесетичен цвят'
        },
        iban: {
            'default': 'Моля, въведете валиден IBAN номер',
            countryNotSupported: 'Държавата %s не се поддържа',
            country: 'Моля, въведете валиден номер на IBAN в %s',
            countries: {
                АD: 'Андора',
                AE: 'Обединени арабски емирства',
                AL: 'Албания',
                AO: 'Ангола',
                AT: 'Австрия',
                AZ: 'Азербайджан',
                BA: 'Босна и Херцеговина',
                BE: 'Белгия',
                BF: 'Буркина Фасо',
                BG: 'България',
                BH: 'Бахрейн',
                BI: 'Бурунди',
                BJ: 'Бенин',
                BR: 'Бразилия',
                CH: 'Швейцария',
                CI: 'Ivory Coast',
                CM: 'Камерун',
                CR: 'Коста Рика',
                CV: 'Cape Verde',
                CY: 'Кипър',
                CZ: 'Чешката република',
                DE: 'Германия',
                DK: 'Дания',
                DO: 'Доминиканска република',
                DZ: 'Алжир',
                EE: 'Естония',
                ES: 'Испания',
                FI: 'Финландия',
                FO: 'Фарьорските острови',
                FR: 'Франция',
                GB: 'Обединеното кралство',
                GE: 'Грузия',
                GI: 'Гибралтар',
                GL: 'Гренландия',
                GR: 'Гърция',
                GT: 'Гватемала',
                HR: 'Хърватия',
                HU: 'Унгария',
                IE: 'Ирландия',
                IL: 'Израел',
                IR: 'Иран',
                IS: 'Исландия',
                IT: 'Италия',
                JO: 'Йордания',
                KW: 'Кувейт',
                KZ: 'Казахстан',
                LB: 'Ливан',
                LI: 'Лихтенщайн',
                LT: 'Литва',
                LU: 'Люксембург',
                LV: 'Латвия',
                MC: 'Монако',
                MD: 'Молдова',
                ME: 'Черна гора',
                MG: 'Мадагаскар',
                MK: 'Македония',
                ML: 'Мали',
                MR: 'Мавритания',
                MT: 'Малта',
                MU: 'Мавриций',
                MZ: 'Мозамбик',
                NL: 'Нидерландия',
                NO: 'Норвегия',
                PK: 'Пакистан',
                PL: 'Полша',
                PS: 'палестинска',
                PT: 'Португалия',
                QA: 'Катар',
                RO: 'Румъния',
                RS: 'Сърбия',
                SA: 'Саудитска Арабия',
                SE: 'Швеция',
                SI: 'Словения',
                SK: 'Словакия',
                SM: 'San Marino',
                SN: 'Сенегал',
                TN: 'Тунис',
                TR: 'Турция',
                VG: 'Британски Вирджински острови'
            }
        },
        id: {
            'default': 'Моля, въведете валиден идентификационен номер',
            countryNotSupported: 'Кода на държавата %s не се поддържа',
            country: 'Моля, въведете валиден %s идентификационния номер',
            countries: {
                BA: 'Босна и Херцеговина',
                BG: 'Български',
                BR: 'Бразилска',
                СН: 'Швейцарски',
                CL: 'Чилийски',
                CZ: 'Чехия',
                DK: 'Датски',
                EE: 'Естонски',
                ES: 'Испански',
                FI: 'Финландски',
                HR: 'Хърватски',
                IE: 'Ирландски',
                IS: 'Исландия',
                LT: 'Литовски',
                LV: 'Латвийски',
                ME: 'Черна гора',
                MK: 'Македонски',
                NL: 'Холандски',
                RO: 'Румънци',
                RS: 'Сръбски',
                SE: 'Шведски',
                SI: 'Словенски',
                SK: 'Словашки',
                SM: 'Сан Марино',
                ZA: 'Южна Африка'
            }
        },
        identical: {
            'default': 'Моля, въведете една и съща стойност'
        },
        imei: {
            'default': 'Моля, въведете валиден IMEI номер'
        },
        imo: {
            'default': 'Моля, въведете валиден IMO номер'
        },
        integer: {
            'default': 'Моля, въведете валиден номер'
        },
        ip: {
            'default': 'Моля, въведете валиден IP адрес',
            ipv4: 'Моля, въведете валиден IPv4 адрес',
            ipv6: 'Моля, въведете валиден IPv6 адрес'
        },
        isbn: {
            'default': 'Моля, въведете валиден ISBN номер'
        },
        isin: {
            'default': 'Моля, въведете валиден ISIN номер'
        },
        ismn: {
            'default': 'Моля, въведете валиден ISMN номер'
        },
        issn: {
            'default': 'Моля, въведете валиден ISSN номер'
        },
        lessThan: {
            'default': 'Моля, въведете стойност по-малка или равна на %s',
            notInclusive: 'Моля, въведете стойност по-малко от %s'
        },
        mac: {
            'default': 'Моля, въведете валиден MAC адрес'
        },
        meid: {
            'default': 'Моля, въведете валиден MEID номер'
        },
        notEmpty: {
            'default': 'Моля, въведете стойност'
        },
        numeric: {
            'default': 'Моля, въведете валидно число с плаваща запетая'
        },
        phone: {
            'default': 'Моля, въведете валиден телефонен номер',
            countryNotSupported: 'Държавата %s не се поддържа',
            country: 'Моля, въведете валиден телефонен номер в %s',
            countries: {
                BR: 'Бразилия',
                CN: 'Китай',
                ES: 'Испания',
                FR: 'Франция',
                GB: 'Великобритания',
                MA: 'Мароко',
                PK: 'Пакистан',
                RO: 'Румъния',
                US: 'САЩ'
            }
        },
        regexp: {
            'default': 'Моля, въведете стойност, отговаряща на модела'
        },
        remote: {
            'default': 'Моля, въведете валидна стойност'
        },
        rtn: {
            'default': 'Моля, въведете валиде  RTN номер'
        },
        sedol: {
            'default': 'Моля, въведете валиден SEDOL номер'
        },
        siren: {
            'default': 'Моля, въведете валиден SIREN номер'
        },
        siret: {
            'default': 'Моля, въведете валиден SIRET номер'
        },
        step: {
            'default': 'Моля, въведете валиденa стъпка от %s'
        },
        stringCase: {
            'default': 'Моля, въведете само с малки букви',
            upper: 'Моля въведете само главни букви'
        },
        stringLength: {
            'default': 'Моля, въведете стойност с валидни дължина',
            less: 'Моля, въведете по-малко от %s знака',
            more: 'Моля въведете повече от %s знака',
            between: 'Моля, въведете стойност между %s и %s знака'
        },
        uri: {
            'default': 'Моля, въведете валиден URI'
        },
        uuid: {
            'default': 'Моля, въведете валиден UUID номер',
            version: 'Моля, въведете валиден UUID номер с версия %s'
        },
        vat: {
            'default': 'Моля, въведете валиден ДДС',
            countryNotSupported: 'Държавата %s не се поддържа',
            country: 'Моля, въведете валиден номер %s и ДДС',
            countries: {
                AT: 'Австрийски',
                BE: 'Белгийската',
                BG: 'Български',
                BR: 'Бразилска',
                СН: 'Швейцарски',
                CY: 'Кипърска',
                CZ: 'Чехия',
                DE: 'Немски',
                DK: 'Датски',
                EE: 'Естонски',
                ES: 'Испански',
                FI: 'Финландски',
                FR: 'Френски',
                GB: 'Обединеното кралство',
                GR: 'Гръцки',
                EL: 'Гръцки',
                HU: 'Унгарски',
                HR: 'Хърватски',
                IE: 'Ирландски',
                IS: 'Исландия',
                IT: 'Италиански',
                LT: 'Литовски',
                LU: 'Люксембург',
                LV: 'Латвийски',
                MT: 'Малтийски',
                NL: 'Холандски',
                NO: 'Норвежки',
                PL: 'Полски',
                PT: 'Португалски',
                RO: 'Румънци',
                RU: 'Руски',
                RS: 'Сръбски',
                SE: 'Шведски',
                SI: 'Словенски',
                SK: 'Словакия',
                VE: 'венецуелският',
                ZA: 'Южна Африка'
            }
        },
        vin: {
            'default': 'Моля, въведете валиден номер VIN'
        },
        zipCode: {
            'default': 'Моля, въведете валиден пощенски код',
            countryNotSupported: 'Кода на държавата %s не се поддържа',
            country: 'Моля, въведете валиден %s',
            countries: {
                BR: 'Бразилска пощенски код',
                CA: 'Канадски пощенски код',
                DK: 'Датски пощенски код',
                GB: 'Пощенски код Великобритания',
                IT: 'Италиански пощенски код',
                MA: 'Mарокански пощенски код',
                NL: 'Холандски пощенски код',
                SE: 'Швейцарски пощенски код',
                SG: 'Пощенски код Сингапур',
                US: 'САЩ пощенски код'
            }
        }
    });
}(window.jQuery));
