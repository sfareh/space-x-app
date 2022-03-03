export class Rocket {
    id: String;
    name: String;
    description: String;
    height: {
        meters: Number;
    }
    diameter: {
        meters: Number;
    }
    mass    : {
        kg: Number;
    }
    engines: {
        number: Number;
    }
    active: Boolean;
    cost_per_launch: Number;
    success_rate_pct: Number;
    country: String;
    first_flight: String;
    flickr_images: {
        0: String;
        1: String;
        2: String;
        3: String;
        4: String;
        5: String;
        6: String;
        7: String;
        8: String;

    }
    wikipedia: String;

}
