export default function validateInput(value, regex, inputId, spanId, callback) {
    var regexp = new RegExp(regex);

    var input = document.getElementById(inputId);
    var span = document.getElementById(spanId);      
    if(regexp.test(value))
    {
      input.classList.remove("invalid");
      span.classList.add("text-hidden");
      callback();
    }
    else{
      input.classList.add("invalid");
      span.classList.remove("text-hidden");
    }
}