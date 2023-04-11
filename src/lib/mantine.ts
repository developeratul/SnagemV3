import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    brand: ['#F7DBF7', '#E4BFE4', '#D1A2D1', '#C17DC1', '#AC5DAB', '#782A77', '#651664', '#4C094B', '#3B053A', '#2A0229']
    //          1          2          3          4           5   6(actual main)  main        8        9          10
  },
  primaryColor: "brand",
};