import React, { useState } from "react";
import { Float, type FloatProps } from "@headlessui-float/react";
import { Popover } from "@headlessui/react";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  placement?: FloatProps["placement"];
};

export function Tooltip({
  trigger,
  children,
  placement = "top",

  /*
    Props are applied to the Float component, 
    which is a wrapper for the tooltip "children".
  */
  ...props
}: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Popover className="flex items-center justify-center">
      <Float
        show={open}
        placement={placement}
        offset={15}
        shift={6}
        flip={10}
        arrow
        portal
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
        {...props}
      >
        <Popover.Group
          onClick={handleOpen}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className="cursor-auto"
        >
          {trigger}
        </Popover.Group>

        <Popover.Panel
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className="rounded-md bg-black focus:outline-none"
        >
          <Float.Arrow className="absolute h-5 w-5 rotate-45 bg-black rounded-b" />
          <div className="relative h-full rounded-md text-sm font-medium text-white py-2 px-4">
            {children}
          </div>
        </Popover.Panel>
      </Float>
    </Popover>
  );
}
