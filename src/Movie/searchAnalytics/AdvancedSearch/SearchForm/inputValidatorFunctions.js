export function isAlphabetic(input) {
  return typeof input === "string" && /^[A-Za-z\s]+$/.test(input);
}

export function isNumeric(input) {
  return typeof input === "string" && /^[0-9]+$/.test(input);
}

export function createSearchQuery(
  nameField,
  yearField,
  ratingField,
  setNameField,
  setYearField,
  setRatingField
) {
  //checking nameField validation
  if (nameField.isChecked && !yearField.isChecked && !ratingField.isChecked) {
    if (nameField.value !== "" && !nameField.isError) {
      return { type: "byName", payload: { nameQuery: nameField.value.trim() } };
    } else {
      setNameField((s) => ({ ...s, isError: true }));
    }
  }

  //checking yearField validation
  if (yearField.isChecked && !nameField.isChecked && !ratingField.isChecked) {
    if (yearField.value !== "" && !yearField.isError) {
      return { type: "byYear", payload: { yearQuery: yearField.value.trim() } };
    } else {
      setYearField((s) => ({ ...s, isError: true }));
      return;
    }
  }

  //checking rating field
  if (ratingField.isChecked && !nameField.isChecked && !yearField.isChecked) {
    if (ratingField.value.input !== "" && !ratingField.isError) {
      return {
        type: "byRating",
        payload: {
          ratingQuery: {
            input: ratingField.value.input.trim(),
            range: ratingField.value.range,
          },
        },
      };
    } else {
      setRatingField((s) => ({ ...s, value: { ...s.value }, isError: true }));
      return;
    }
  }

  //for name and year validation
  if (nameField.isChecked && yearField.isChecked && !ratingField.isChecked) {
    let anyError = "";

    if (nameField.value === "" || nameField.isError) {
      setNameField((s) => ({ ...s, isError: true }));
      anyError = true;
    }

    if (yearField.value === "" || yearField.isError) {
      setYearField((s) => ({ ...s, isError: true }));
      anyError = true;
    }

    if (!anyError) {
      return {
        type: "byNameAndYear",
        payload: {
          nameQuery: nameField.value.trim(),
          yearQuery: yearField.value.trim(),
        },
      };
    }
  }

  //for name and rating validation
  if (nameField.isChecked && !yearField.isChecked && ratingField.isChecked) {
    let anyError = "";

    if (nameField.value === "" || nameField.isError) {
      setNameField((s) => ({ ...s, isError: true }));
      anyError = true;
    }

    if (ratingField.value.input === "" || ratingField.isError) {
      setRatingField((s) => ({ ...s, value: { ...s.value }, isError: true }));
      anyError = true;
    }

    if (!anyError) {
      return {
        type: "byNameAndRating",
        payload: {
          nameQuery: nameField.value.trim(),
          ratingQuery: {
            input: ratingField.value.input.trim(),
            range: ratingField.value.range,
          },
        },
      };
    }
  }

  //for year and rating validation
  if (!nameField.isChecked && yearField.isChecked && ratingField.isChecked) {
    let anyError = "";

    if (yearField.value === "" || yearField.isError) {
      setYearField((s) => ({ ...s, isError: true }));
      anyError = true;
    }

    if (ratingField.value.input === "" || ratingField.isError) {
      setRatingField((s) => ({ ...s, value: { ...s.value }, isError: true }));
      anyError = true;
    }

    if (!anyError) {
      return {
        type: "byYearAndRating",
        payload: {
          yearQuery: yearField.value.trim(),
          ratingQuery: {
            input: ratingField.value.input.trim(),
            range: ratingField.value.range,
          },
        },
      };
    }
  }

  //for name,year and rating field validations
  if (nameField.isChecked && yearField.isChecked && ratingField.isChecked) {
    let anyError = "";

    if (nameField.value === "" || nameField.isError) {
      setNameField((s) => ({ ...s, isError: true }));
      anyError = true;
    }

    if (yearField.value === "" || yearField.isError) {
      setYearField((s) => ({ ...s, isError: true }));
      anyError = true;
    }

    if (ratingField.value.input === "" || ratingField.isError) {
      setRatingField((s) => ({ ...s, value: { ...s.value }, isError: true }));
      anyError = true;
    }

    if (!anyError) {
      return {
        type: "byAll",
        payload: {
          nameQuery: nameField.value.trim(),
          yearQuery: yearField.value.trim(),
          ratingQuery: {
            input: ratingField.value.input.trim(),
            range: ratingField.value.range,
          },
        },
      };
    }
  }

  return null;
}
