import { Grid, GridCell, GridSystem } from "@/registry/default/ui/grid"

export default function GridDebug() {
  return (
    <GridSystem debug guideWidth={1}>
      <Grid columns={3} rows={2}>
        <GridCell></GridCell>
        <GridCell></GridCell>
        <GridCell></GridCell>
        <GridCell></GridCell>
        <GridCell></GridCell>
        <GridCell></GridCell>
      </Grid>
    </GridSystem>
  )
}
