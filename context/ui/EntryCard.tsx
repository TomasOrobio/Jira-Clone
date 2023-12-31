import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '../../interface';
import { DragEvent, FC, useContext } from 'react';
import { UIContext } from './UIContext';


interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    
    event.dataTransfer.setData('text', entry._id)

    startDragging();

  }
  const onDragEnd = (event: DragEvent) => {

    endDragging();
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}> {entry.description} </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'> hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
