

    $(document).ready(function() {
        $("#calculate_button").click(function() {
            // Get input values
            var num1 = parseFloat($("#num1").val());
            var num2 = parseFloat($("#num2").val());
            var operator = $("#operator").val();




            // Check if both inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                $("#result").text("Please enter valid numbers.");
                return;
            }

            // Perform calculation based on the selected operator
            var result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        result = "Cannot divide by zero.";
                    } else {
                        result = num1 / num2;
                    }
                    break;
                case "%":
                    result = num1 % num2;
                    break;
                default:
                    result = "Invalid operator.";
            }

            // Display the result
            $("#result").text("Result: " + result);
        });
    });
    