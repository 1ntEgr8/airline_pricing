export const ita_mappings = {
    "departing_from": "#cityPair-orig-0",
    "destination": "#cityPair-dest-0",
    "outbound_date": "#cityPair-outDate-0",
    "outbound_date_departure": "//input[@id='cityPair-outDate-1']/following-sibling::select/option[text()='Departure']",
    "outbound_date_arrival": "//input[@id='cityPair-outDate-1']/following-sibling::select/option[text()='Arrival']",
    "outbound_date_on_this_day": "//input[@id='cityPair-outDate-1']/following-sibling::select/following-sibling::select/option[text()='On this day only']",
    "outbound_date_or_day_before": "//input[@id='cityPair-outDate-1']/following-sibling::select/following-sibling::select/option[text()='Or day before']",
    "outbound_date_or_day_after": "//input[@id='cityPair-outDate-1']/following-sibling::select/following-sibling::select/option[text()='Or day after']",
    "outbound_date_plus_minus_one_day": "//input[@id='cityPair-outDate-1']/following-sibling::select/following-sibling::select/option[text()='Plus/minus 1 day']",
    "outbound_date_plus_minus_two_days": "//input[@id='cityPair-outDate-1']/following-sibling::select/following-sibling::select/option[text()='Plus/minus 2 days']",
    "return_date": "#cityPair-retDate-0",
    "return_date_departure": "//input[@id='cityPair-retDate-1']/following-sibling::select/option[text()='Departure']",
    "return_date_arrival": "//input[@id='cityPair-retDate-1']/following-sibling::select/option[text()='Arrival']",
    "return_date_on_this_day": "//input[@id='cityPair-retDate-1']/following-sibling::select/following-sibling::select/option[text()='On this day only']",
    "return_date_or_day_before": "//input[@id='cityPair-retDate-1']/following-sibling::select/following-sibling::select/option[text()='Or day before']",
    "return_date_or_day_after": "//input[@id='cityPair-retDate-1']/following-sibling::select/following-sibling::select/option[text()='Or day after']",
    "return_date_plus_minus_one_day": "//input[@id='cityPair-retDate-1']/following-sibling::select/following-sibling::select/option[text()='Plus/minus 1 day']",
    "return_date_plus_minus_two_days": "//input[@id='cityPair-retDate-1']/following-sibling::select/following-sibling::select/option[text()='Plus/minus 2 days']",
    "cabin_cheapest_available": "//option[@value='COACH']",
    "cabin_premium_economy": "//option[@value='PREMIUM-COACH']",
    "cabin_business_class_or_higher": "//option[@value='BUSINESS']",
    "cabin_first_class": "//option[@value='FIRST']",
    "stops_no_limit": "//label[text()=' Stops ']/following-sibling::div/select/option[text()='No limit']",
    "stops_nonstop_only": "//label[text()=' Stops ']/following-sibling::div/select/option[text()='Nonstop only']",
    "stops_up_to_one_stop": "//label[text()=' Stops ']/following-sibling::div/select/option[text()='Up to 1 stop']",
    "stops_up_to_two_stops": "//label[text()=' Stops ']/following-sibling::div/select/option[text()='Up to 2 stops']",
    "extra_stops_no_limit": "//label[text()=' Extra stops ']/following-sibling::div/select/option[text()='No limit']",
    "extra_stops_nonstop_only": "//label[text()=' Extra stops ']/following-sibling::div/select/option[text()='Nonstop only']",
    "extra_stops_up_to_one_stop": "//label[text()=' Extra stops ']/following-sibling::div/select/option[text()='Up to 1 stop']",
    "extra_stops_up_to_two_stops": "//label[text()=' Extra stops ']/following-sibling::div/select/option[text()='Up to 2 stops']",
    "currency": "//label[text()=' Currency ']/following-sibling::div/input",
    "sales_city": "//label[text()=' Sales city ']/following-sibling::div/input",
    "round_trip": "//div[text()='Round trip']",
    "one_way": "//div[text()='One-way']",
    "multi_city": "//div[text()='Multi-city']"
};

export const gflights_mappings = {
    "destination_picker": "destination-picker",
    "departing_from_div": "div.flt-input[data-flt-ve='origin_airport']",
    "departing_from": "destination-picker input[placeholder='Where from?']",
    "destination_div": "div.flt-input[data-flt-ve='destination_airport']",
    "destination": "destination-picker input[placeholder='Where to?']",
    "outbound_date_div": "div.flt-input[data-flt-ve='departure_date']",
    "outbound_date": "date-input input[placeholder='Departure date']",
    "return_date": "date-input input[placeholder='Return date']",
}

export const ITA = {
    "flights": raw => raw[38][2],
    "price": raw => raw[1][1],
    "carrier_code": raw => raw[2][1][1][1],
    "carrier_name": raw => raw[2][1][1][2],
    "from_code": raw => raw[2][2][0][1][1],
    "from_name": raw => raw[2][2][0][1][2],
    "to_code": raw => raw[2][2][0][2][1],
    "to_name": raw => raw[2][2][0][2][2],
    "departure_date": raw => raw[2][2][0][3],
    "arrival_date": raw => raw[2][2][0][4],
    "flight_numbers": raw => raw[2][2][0][7],
    "stops": raw => raw[2][2][0][8],
    "code": raw => raw[5]
};

export const GFLIGHTS = {
    "flights": raw => raw[2][2][0].concat(raw[2][2][1]? raw[2][2][1] : []),
    "price": raw => raw[6],
    "carrier_code": raw => raw[3],
};

/*
    different parsing for gflights and ita

    an extensible framework that lets you add more
    sites to parse in the future
*/