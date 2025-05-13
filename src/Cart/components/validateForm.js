

export const validateForm=(formData,validationSchema)=>
{
    const errors={};
    for(let key in validationSchema)
    {
        const value = formData[key];
      const rules = validationSchema[key];
      if(!value.trim() && rules.required)
      {
        errors[key]= rules.message;
      }
      else if(rules.pattern && !rules.pattern.test(value))
      {
        errors[key]=rules.message;
      }
    }
    return errors;
}