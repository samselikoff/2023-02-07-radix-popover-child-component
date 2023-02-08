import * as Popover from "@radix-ui/react-popover";
import { forwardRef, ReactNode, useEffect, useRef, useState } from "react";

export default function Index() {
  return (
    <div className="m-8 border p-8">
      <Popover.Root>
        <Popover.Trigger
          asChild
          className="hover:text-gray-400 focus:outline-none"
        >
          <Button>Click me</Button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className=""
            sideOffset={5}
            side="right"
            align="center"
          >
            <div className="focus:outline-none">
              <div className="rounded border border-white/20 bg-gray-800 py-1.5 px-4 text-sm font-semibold text-gray-400 shadow">
                Copied!
              </div>
              <Popover.Arrow className="fill-white/20" />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

const Button = forwardRef(function Button(
  { children }: { children: ReactNode },
  ref
) {
  useEffect(() => {
    console.log(ref);
  });

  return (
    <button className="foo" ref={ref}>
      {children}
    </button>
  );
});
