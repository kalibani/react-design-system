import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionProps,
  AccordionHeaderProps,
  AccordionBodyProps,
} from "@material-tailwind/react";

import { FaPlus } from "react-icons/fa";

// type AccordionBaseProps = Pick<AccordionProps, keyof AccordionProps>;

// type AccordionHeaderBaseProps = Pick<
//   AccordionHeaderProps,
//   keyof AccordionHeaderProps
// >;

// type AccordionBodyBaseProps = Pick<
//   AccordionBodyProps,
//   keyof AccordionBodyProps
// >;

// interface Props extends AccordionBaseProps, AccordionHeaderBaseProps, AccordionBodyBaseProps

export const MuiAccordion: React.FC = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" bg-white p-4">
      <Accordion open={open === 1} icon={<FaPlus />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<FaPlus />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<FaPlus />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
};
