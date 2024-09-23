import { Grid, GridCell, GridSystem } from "@/registry/default/ui/grid"

export default function GridCellSpan() {
  return (
    <GridSystem guideWidth={1}>
      <Grid columns={3} rows={2}>
        <GridCell
          column={{ sm: "1", md: "1/3" }}
          row={{ sm: "1/3", md: 1 }}
          solid
        >
          1 + 2
        </GridCell>
        <GridCell>3</GridCell>
        <GridCell>4</GridCell>
        <GridCell
          column={{ sm: 1, md: "1/3", lg: "2/4" }}
          row={{ sm: "5/7", md: 3, lg: 2 }}
          solid
        >
          5 + 6
        </GridCell>
      </Grid>
    </GridSystem>
  )
}
