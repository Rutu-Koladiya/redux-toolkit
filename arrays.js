const data = ["1_rutu_koladiya_surat", "2_rutu_koladiya_surat"];

const formattedData = data.map((item) => {
  const [id, firstName, lastName, city] = item.split("_");

  return {
    id: Number(id),
    firstName,
    lastName,
    city,
  };
});

console.log(formattedData);

// covert string to num ["1", "2", "3"] => [1, 2, 3]

const string = ["1", "2", "3"];

const num = string.map((numbers) => Number(numbers));

console.log(num);

// ["rutu koladiya", "boss lady"]
// → [{ firstName: "rutu", lastName: "koladiya" }, { firstName: "boss", lastName: "lady" }]

const names = ["rutu koladiya", "boss lady"];

const formattedNames = names.map((name) => {
  const [firstName, lastName] = name.split(" ");

  return {
    firstName,
    lastName,
  };
});

console.log(formattedNames);

// ["name:rutu", "city:surat"]
// → { name: "rutu", city: "surat" }

// map always return an array so if you want insted of something array use another method based on need if have to format then reduce.

const arr = ["name:rutu", "city:surat"];

const obj = arr.reduce((acc, curr) => {
  const [key, value] = curr.split(":");

  acc[key] = value;
  return acc;
}, {});

console.log(obj);

// const obj = Object.fromEntries(
//   arr.map(item => item.split(":"))
// );

// const obj = {};
// arr.forEach(item => {
//   const [key, value] = item.split(":");
//   obj[key] = value;
// });
// console.log(obj);

// [{id:1, city:"surat"}, {id:2, city:"mumbai"}, {id:3, city:"surat"}]
// → { surat: [{id:1,...}, {id:3,...}], mumbai: [{id:2,...}] }

const cities = [
  { id: 1, city: "surat" },
  { id: 2, city: "mumbai" },
  { id: 3, city: "surat" },
];

const formattedCity = {};
cities.forEach((item) => {
  const { city } = item;

  if (!formattedCity[city]) {
    formattedCity[city] = [];
  }

  formattedCity[city].push(item);
});

// const formattedCity = cities.reduce((acc, item) => {
//   const { city } = item;
//   if (!acc[city]) acc[city] = [];
//   acc[city].push(item);
//   return acc;
// }, {});

// const formattedCity = Object.groupBy(cities, item => item.city);

console.log(formattedCity);

// [["id", 1], ["name", "rutu"], ["city", "surat"]]
// → { id: 1, name: "rutu", city: "surat" }

const person = [
  ["id", 1],
  ["name", "rutu"],
  ["city", "surat"],
];

const formattedPerson = person.reduce((acc, curr) => {
  const [key, value] = curr;
  acc[key] = value;

  return acc;
}, {});

console.log(formattedPerson);

// [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]

const nestedArray = [[1, 2], [3, 4], [5]];

const flattenArray = nestedArray.flat();

// const flattenArray = nestedArray.reduce((acc, arr) => [...acc, ...arr], []);

console.log(flattenArray);

// const csv = "id,name,city\n1,rutu,surat\n2,boss,mumbai";
// → [{id:1, name:"rutu", city:"surat"}, {id:2, name:"boss", city:"mumbai"}]

// In .reduce((accumulator, currentValue, index) => ...):

// accumulator → object we are building (obj)

// currentValue → current key in the loop (key)

// index → position of the key in keys (i)

const csv = "id,name,city\n1,rutu,surat\n2,boss,mumbai";

const csvFormatter = (csv) => {
  const splittedData = csv.split("\n");

  const key = splittedData[0].split(",");

  const values = splittedData.splice(1).map((value) => value.split(","));

  return values.map((row) => {
    return key.reduce((acc, key, i) => {
      acc[key] = isNaN(row[i]) ? row[i] : Number(row[i]);

      return acc;
    }, {});
  });
};

console.log(csvFormatter(csv));

// [{id:1, city:"surat"}, {id:2, city:"mumbai"}, {id:3, city:"surat"}]
// → ["surat", "mumbai"]

const cityData = [
  { id: 1, city: "surat" },
  { id: 2, city: "mumbai" },
  { id: 3, city: "surat" },
];

const uniqueCity = cityData.reduce((acc, curr) => {
  const { city } = curr;

  if (!acc.includes(city)) acc.push(city);

  return acc;
}, []);

// const unique = [...new Set(cityData.map((item) => item.city))];

console.log(uniqueCity);

// { user: { name: "rutu", address: { city: "surat" } } }
// → { "user.name": "rutu", "user.address.city": "surat" }

// {
//   users: [
//     { uid: 1, details: { first: "rutu", last: "koladiya" } },
//     { uid: 2, details: { first: "boss", last: "lady" } }
//   ]
// }
// → [
//   { id: 1, fullName: "rutu koladiya" },
//   { id: 2, fullName: "boss lady" }
// ]

const response = {
  users: [
    { uid: 1, details: { first: "rutu", last: "koladiya" } },
    { uid: 2, details: { first: "boss", last: "lady" } },
  ],
};

const { users } = response;

const formatted = users.map((user) => {
  const { uid, details } = user;
  const { first, last } = details;

  return {
    id: uid,
    fullName: `${first} ${last}`,
  };
});

console.log(formatted);

import React, { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
} from "reactstrap";
import Select from "react-select";

import useRolePermissions from "../../../../Routes/useRolePermissions";

import { useFormik } from "formik";
import * as Yup from "yup";
import { capitalize } from "lodash";

import { labApiTagTypes } from "../../../../tagTypes";
import {
  useLazyCachedGetQuery,
  usePostMutation,
  usePutMutation,
} from "../../../../slices/api";

import DisplayColor from "./DisplayColor";

import { timeDuration } from "../../../../Utils/options";
import { colorCodeOptions, customSelectStyle } from "../../../../Utils";

const SampleType = ({ isOpen, handleClose = () => {}, sampleTypeId = "" }) => {
  const [getSampleTypeData, { data: { data: sampleTypeData = {} } = {} }] =
    useLazyCachedGetQuery();
  const [addSampleType, { isLoading: isAdding }] = usePostMutation();
  const [editSampleType, { isLoading: isEditing }] = usePutMutation();

  const { isUser, isAdmin } = useRolePermissions();

  const handleSampleTypeData = async () => {
    try {
      await getSampleTypeData({
        endpoint: `/sample_type/${sampleTypeId}`,
        tags: [labApiTagTypes.SAMPLE_MASTER],
      }).unwrap();
    } catch (error) {}
  };

  const handleSample = async (values = {}) => {
    try {
      const payload = {
        duration: values.duration || null,
        duration_in: values.durationIn?.value || null,
        sample_type_name: values.sampleTypeName,
        character_to_be_print: values.displayCharacter,
        container_type: values.container || null,
        prefix: values.prefix,
        sequence: values.sequence,
        ...(values.color || sampleTypeId
          ? {
              color: values.color
                ? {
                    color_code: values.color.value,
                    color_name: values.color.label.toUpperCase(),
                  }
                : null,
            }
          : {}),
      };
      const configuration = {
        endpoint: sampleTypeId
          ? `/sample_type/${sampleTypeId}`
          : "/sample_type",
        payload,
        tags: [labApiTagTypes.SAMPLE_MASTER],
        toastify: {
          message: `Your sample type ${
            sampleTypeId ? "edited" : "added"
          } successfully`,
        },
      };

      if (sampleTypeId) {
        await editSampleType(configuration).unwrap();
      } else {
        await addSampleType(configuration).unwrap();
      }
      handleClose();
    } catch {}
  };

  const {
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    resetForm,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      sampleTypeName: sampleTypeData.sample_type_name || "",
      displayCharacter: sampleTypeData.character_to_be_print || "",
      color: sampleTypeData.color
        ? {
            label: capitalize(sampleTypeData.color.color_name),
            value: sampleTypeData.color.color_code,
          }
        : null,
      duration: sampleTypeData.duration || null,
      durationIn: sampleTypeData.duration_in
        ? {
            label: sampleTypeData.duration_in,
            value: sampleTypeData.duration_in,
          }
        : null,
      container: sampleTypeData.container_type || null,
      prefix: sampleTypeData.prefix || "",
      sequence: sampleTypeData.sequence || "",
    },

    validationSchema: Yup.object({
      sampleTypeName: Yup.string().required("Please enter a Sample Type"),
      displayCharacter: Yup.string().required("Please enter a Display Sample"),
      prefix: Yup.string().required("Please enter a prefix"),
      sequence: Yup.string().required("Please enter a sequence number"),
      durationIn: Yup.object().required("Please Select Duration In"),
    }),
    onSubmit: (values) => handleSample(values),
  });

  useEffect(() => {
    if (sampleTypeId && (isAdmin || isUser)) handleSampleTypeData();
  }, [sampleTypeId, isUser, isAdmin]);

  return (
    <Modal isOpen={isOpen} centered size="md">
      <Form>
        <ModalHeader toggle={handleClose} className="bg-light p-3">
          Sample Type
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col className="mb-2" xl={12} lg={12}>
              <Label htmlFor="sampleTypeName" className="form-label mb-0">
                Sample Type Name <span className="text-danger">*</span>
              </Label>
              <Input
                id="sampleTypeName"
                name="sampleTypeName"
                className="form-control"
                type="text"
                placeholder="Sample Type"
                value={values.sampleTypeName}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={!!(touched.sampleTypeName && errors.sampleTypeName)}
              />
              {touched.sampleTypeName && errors.sampleTypeName && (
                <FormFeedback type="invalid">
                  <div>{errors.sampleTypeName}</div>
                </FormFeedback>
              )}
            </Col>
            <Col className="mb-2" xl={6} lg={6}>
              <Label className="mb-0">Color Code</Label>
              <Select
                id="color"
                name="color"
                getOptionLabel={(option) => (
                  <DisplayColor
                    colorName={option.label}
                    colorCode={option.value}
                  />
                )}
                options={colorCodeOptions}
                styles={customSelectStyle.initialSelect}
                value={values.color}
                onChange={(value) => setFieldValue("color", value)}
                isClearable
              />
            </Col>
            <Col className="mb-2" xl={6} lg={6}>
              <Label htmlFor="displayCharacter" className="form-label mb-0">
                Sample Name Sticker <span className="text-danger">*</span>
              </Label>
              <Input
                id="displayCharacter"
                name="displayCharacter"
                className="form-control"
                type="text"
                placeholder="Sample Character"
                value={values.displayCharacter}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={
                  !!(touched.displayCharacter && errors.displayCharacter)
                }
              />
              {touched.displayCharacter && errors.displayCharacter && (
                <FormFeedback type="invalid">
                  <div>{errors.displayCharacter}</div>
                </FormFeedback>
              )}
            </Col>
            <Col className="mb-2" xl={6} lg={6}>
              <Label className="mb-0">Duration</Label>
              <Input
                id="duration"
                name="duration"
                className="form-control"
                type="text"
                placeholder="Duration"
                value={values.duration}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col xl={6} lg={6}>
              <Label className="mb-0">
                Duration In<span className="text-danger">*</span>
              </Label>
              <Select
                name="durationIn"
                value={values.durationIn}
                onChange={(value) => setFieldValue("durationIn", value)}
                options={timeDuration}
                styles={customSelectStyle.initialSelect}
                isClearable
                onBlur={handleBlur}
                invalid={!!(touched.durationIn && errors.durationIn)}
              />

              {touched.durationIn && errors.durationIn && (
                <FormFeedback type="invalid">
                  <div>{errors.durationIn}</div>
                </FormFeedback>
              )}
            </Col>
            <Col xl={6} lg={6}>
              <Label className="mb-0">Container</Label>
              <Input
                id="container"
                name="container"
                className="form-control"
                type="text"
                placeholder="container"
                value={values.container}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>

            <Col xl={6} lg={6}>
              <Label className="mb-0">
                Prefix<span className="text-danger">*</span>
              </Label>
              <Input
                id="prefix"
                name="prefix"
                className="form-control"
                type="text"
                placeholder="prefix"
                value={values.prefix}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={!!(touched.prefix && errors.prefix)}
              />
              {touched.prefix && errors.prefix && (
                <FormFeedback type="invalid">
                  <div>{errors.prefix}</div>
                </FormFeedback>
              )}
            </Col>

            <Col xl={6} lg={6}>
              <Label className="mb-0">
                Sequence<span className="text-danger">*</span>
              </Label>
              <Input
                id="sequence"
                name="sequence"
                className="form-control"
                type="text"
                placeholder="sequence"
                value={values.sequence}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={!!(touched.sequence && errors.sequence)}
              />
              {touched.sequence && errors.sequence && (
                <FormFeedback type="invalid">
                  <div>{errors.sequence}</div>
                </FormFeedback>
              )}
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="light"
            onClick={() => {
              resetForm();
              handleClose();
            }}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            disabled={isEditing || isAdding}
            onClick={handleSubmit}
          >
            {(isEditing || isAdding) && <Spinner size="sm" className="me-2" />}
            {sampleTypeId ? "Edit" : "Add"}
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default SampleType;
