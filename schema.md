
departing_from => cityPair-orig-1
destination => cityPair-dest-1

dates
    search_exact_dates => Search exact dates
    see_calendar_lowest_fares => See calendar of lowest fares

outbound_date
    date => cityPair-outDate-1
    departure_or_arrival
        departure => //input[@id="cityPair-outDate-1"]/following-sibling::select/option[text()="Departure"]
        arrival => //input[@id="cityPair-outDate-1"]/following-sibling::select/option[text()="Arrival"]
    on_this_day
        On this day only => //input[@id="cityPair-outDate-1"]/following-sibling::select/following-sibling::select/option[text()="On this day only"]
        Or day before => //input[@id="cityPair-outDate-1"]/following-sibling::select/following-sibling::select/option[text()="Or day before"]
        Or day after => //input[@id="cityPair-outDate-1"]/following-sibling::select/following-sibling::select/option[text()="Or day after"]
        Plus/minus 1 day => //input[@id="cityPair-outDate-1"]/following-sibling::select/following-sibling::select/option[text()="Plus/minus 1 day"]
        Plus/minus 2 days => //input[@id="cityPair-outDate-1"]/following-sibling::select/following-sibling::select/option[text()="Plus/minus 2 days"]

return_date
    date => cityPair-retDate-1
    departure_or_arrival
        departure => //input[@id="cityPair-retDate-1"]/following-sibling::select/option[text()="Departure"]
        arrival => //input[@id="cityPair-retDate-1"]/following-sibling::select/option[text()="Arrival"]
    on_this_day
        On this day only => //input[@id="cityPair-retDate-1"]/following-sibling::select/following-sibling::select/option[text()="On this day only"]
        Or day before => //input[@id="cityPair-retDate-1"]/following-sibling::select/following-sibling::select/option[text()="Or day before"]
        Or day after => //input[@id="cityPair-retDate-1"]/following-sibling::select/following-sibling::select/option[text()="Or day after"]
        Plus/minus 1 day => //input[@id="cityPair-retDate-1"]/following-sibling::select/following-sibling::select/option[text()="Plus/minus 1 day"]
        Plus/minus 2 days => //input[@id="cityPair-retDate-1"]/following-sibling::select/following-sibling::select/option[text()="Plus/minus 2 days"]

adult // most likely won't be changed

cabin
    Cheapest available => //option[@value="COACH"]
    Premium economy => //option[@value="PREMIUM-COACH"]
    Business class or higher => //option[@value="BUSINESS"]
    First class => //option[@value="FIRST"]

stops
    No limit => //label[text()=" Stops "]/following-sibling::div/select/option[text()="No limit"]
    Nonstop only => //label[text()=" Stops "]/following-sibling::div/select/option[text()="Nonstop only"]
    Up to 1 stop => //label[text()=" Stops "]/following-sibling::div/select/option[text()="Up to 1 stop"] 
    Up to 2 stops => //label[text()=" Stops "]/following-sibling::div/select/option[text()="Up to 2 stops"]

extra_stops
    No limit => //label[text()=" Extra stops "]/following-sibling::div/select/option[text()="No limit"]
    Nonstop only => //label[text()=" Extra stops "]/following-sibling::div/select/option[text()="Nonstop only"]
    Up to 1 stop => //label[text()=" Extra stops "]/following-sibling::div/select/option[text()="Up to 1 stop"]
    Up to 2 stops => //label[text()=" Extra stops "]/following-sibling::div/select/option[text()="Up to 2 stops"]

currency => //label[text()=" Currency "]/following-sibling::div/input
sales_city => //label[text()=" Sales city "]/following-sibling::div/input

TABS
    Round trip => //div[text()="Round trip"]
    One-way => //div[text()="One-way"]
    Multi-city => //div[text()="Multi-city"]

Stretch Goals:
    advanced controls 