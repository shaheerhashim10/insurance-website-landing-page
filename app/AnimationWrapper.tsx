'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionDivProps = {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  as: any;
  viewport?: any;
  whileInView?: any;
};
type AnimationWrapperProps = {
  children: ReactNode;
  motionProps?: MotionDivProps; // Optional prop for motion.div properties
};

export const AnimationWrapper = ({
  children,
  motionProps,
}: AnimationWrapperProps) => {
  const DynamicMotionComponent = motion(motionProps?.as);
  return (
    <>
      {/* <motion.div {...motionProps}>{children}</motion.div> */}
      <DynamicMotionComponent {...motionProps}>
        {children}
      </DynamicMotionComponent>
    </>
  );
};
