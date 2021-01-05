module.exports = {
    upcoming_tod: function(hour) {
        if (hour >= 0 && hour <= 3) {
            return "this late night/early morning"
        } else if (hour >= 4 && hour <= 7) {
            return "this morning"
        } else if (hour >= 8 && hour <= 11) {
            return "today"
        } else if (hour >= 12 && hour <= 14) {
            return "this afternoon"
        } else if (hour >= 15 && hour <= 17) {
            return "this evening"
        } else if (hour >= 18 && hour <= 20) {
            return "tonight"
        } else if (hour >= 21 && hour <= 23) {
            return "later tonight"
        }
    },
    current_tod: function(hour) {
        if (hour >= 0 && hour <= 3) {
            return "this late at night"
        } else if (hour >= 4 && hour <= 7) {
            return "this early morning"
        } else if (hour >= 8 && hour <= 11) {
            return "this morning"
        } else if (hour >= 12 && hour <= 13) {
            return "this early afternoon"
        } else if (hour >= 14 && hour <= 16) {
            return "this afternoon"
        } else if (hour >= 17 && hour <= 18) {
            return "this early evening"
        } else if (hour >= 19 && hour <= 20) {
            return "this evening"
        } else if (hour >= 21 && hour <= 23) {
            return "tonight"
        }
    }
}