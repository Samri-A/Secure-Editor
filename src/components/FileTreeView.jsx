import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextField from '@mui/material/TextField';

function FileTreeView({ files, setFiles  , onFileSelect }) {
  const handleDoubleClick = (id) => {
    setFiles((prev) =>
      prev.map((file) =>
        file.id === id ? { ...file, isEditing: true } : file
      )
    );
  };

  const handleRename = (id, newName) => {
    setFiles((prev) =>
      prev.map((file) =>
        file.id === id ? { ...file, name: newName, isEditing: false } : file
      )
    );
  };
  const handleClick = (file)=>{
    if(!file.isEditing){
       onFileSelect(file);
    }
    
  }

  return (
    <SimpleTreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {files.map((file) => (
        <TreeItem key={file.id} itemId={file.id} label={
          file.isEditing ? (
            <TextField
              size="small"
              defaultValue={file.name}
              onBlur={(e) => handleRename(file.id, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleRename(file.id, e.target.value);
                }
              }}
              autoFocus
            />
          ) : (
            <div onDoubleClick={() => handleDoubleClick(file.id)} onClick={()=>handleClick(file)}>
              {file.name}
            </div>
          )
        } />
      ))}
    </SimpleTreeView>
  );
}

export default FileTreeView;

