import { Grid, GridCell, GridSystem } from "@/registry/default/ui/grid"

export default function GridDemo() {
  return (
    <GridSystem guideWidth={1}>
      <Grid columns={3} rows={2}>
        <GridCell>1</GridCell>
        <GridCell>2</GridCell>
        <GridCell>3</GridCell>
        <GridCell>4</GridCell>
        <GridCell>5</GridCell>
        <GridCell>6</GridCell>
      </Grid>
    </GridSystem>
  )
}
