import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AttachFile from "./fileupload";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import RunCode from "./runcode";
import { Editor } from "@monaco-editor/react";
import FileTreeView from "./FileTreeView";
import Output from "./Output";
import VulnerDetect from "./VulnerDetect";
import FileCreate from "./FileCreate";
import excuteAgent from './LLM_usage';
const default_value = "# Write your code";
const default_language = "python";

function EditorWindow() {
  const editorRef = useRef(null);
  const [theme, setTheme] = useState("vs-dark");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [chatVisible, setChatVisible] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [agent , setAgent] = useState(false);
  const [files, setFiles] = useState([
    {
      id: "file-1",
      name: "main.py",
      isEditing: false,
      content: default_value,
      language: default_language,
    },
  ]);

  const [currentFileId, setCurrentFileId] = useState("file-1");
  const currentFile = files.find((file) => file.id === currentFileId);

  useEffect(() => {
    if (!currentFile) return;
    editorRef.current?.setValue(currentFile.content);
  }, [currentFileId]);
  useEffect(() => {
  const prompt = "Refactor this code\n";
  const runAgent = async () => {
    if (agent && currentFile) {
      try {
        const result = await excuteAgent(currentFile.content, prompt);
        setFiles((prevFiles) =>
          prevFiles.map((file) =>
            file.id === currentFileId
              ? { ...file, content: result }
              : file
          )
        );
      } catch (error) {
        console.error("Agent execution failed:", error);
      } finally {
        setAgent(false); 
      }
    }
  };

  runAgent();
}, [agent]);

  const handleAddFile = () => {
    const newFile = {
      id: `file-${Date.now()}`,
      name: "untitled.py",
      isEditing: true,
      content: "",
      language: "python",
    };
    setFiles((prev) => [...prev, newFile]);
    setCurrentFileId(newFile.id);
  };

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
    setTheme((prev) => (prev === "vs-dark" ? "vs-light" : "vs-dark"));
  };

  const handleEditorMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (newValue) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === currentFileId ? { ...file, content: newValue } : file
      )
    );
  };

  const toggleChat = () => {
    setChatVisible((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages((prev) => [
        ...prev,
        `You: ${chatInput}`,
        "AI: [Response placeholder]",
      ]);
      setChatInput("");
    }
  };

  return (
    <Box display="flex" height="100vh" bgcolor={isDarkMode ? "#1e1e2f" : "#f5f5f5"}>
      <Box
        width="18%"
        bgcolor={isDarkMode ? "#444" : "#ddd"}
        color={isDarkMode ? "#DCDCDC" : "#333"}
        display="flex"
        flexDirection="column"
        p={1}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">File Explorer</Typography>
          <Box>
            <IconButton size="small">
              <AttachFileIcon/>
            </IconButton>
            <IconButton size="small" onClick={handleAddFile}>
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#999", my: 1 }} />
        <FileTreeView
          files={files}
          setFiles={setFiles}
          onFileSelect={(file) => setCurrentFileId(file.id)}
        />
      </Box>

      
      <Box flexGrow={1} display="flex" flexDirection="column">
        
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor={isDarkMode ? "#444" : "#ddd"}
          px={2}
          py={1}
        >
          <Box display="flex" gap={1} alignItems="center">
            <RunCode editorRef={editorRef} language={currentFile?.language} />
            <VulnerDetect editorRef={editorRef} />
            <Button
              startIcon={isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              onClick={handleThemeToggle}
              size="small"
            >
            </Button>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <FileCreate
              name={currentFile?.name}
              language={currentFile?.language}
              content={currentFile?.content}
            />
            <Button
              variant={chatVisible ? "contained" : "outlined"}
              color="primary"
              startIcon={<ChatIcon />}
              onClick={toggleChat}
              size="small"
            >
              Chat
            </Button>
          </Box>
        </Box>

      
        <Box flexGrow={1} position="relative">
          <Editor
            height="100%"
            language={currentFile?.language || "python"}
            value={currentFile?.content || ""}
            onChange={handleChange}
            onMount={handleEditorMount}
            theme={theme}
          />

          {chatVisible && (
            <Box
              position="absolute"
              top={10}
              right={10}
              width={300}
              height={400}
              bgcolor={isDarkMode ? "#2c2c3c" : "#ffffff"}
              borderRadius={2}
              boxShadow={4}
              display="flex"
              flexDirection="column"
              p={2}
              zIndex={10}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="body2" color={isDarkMode ? "#DCDCDC" : "#333"}>
                  AI Assistant
                </Typography>
                <IconButton size="small" onClick={() => setChatVisible(false)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
              <Box
                flexGrow={1}
                overflow="auto"
                sx={{ fontSize: "0.875rem", mb: 1 }}
                color={isDarkMode ? "#DCDCDC" : "#333"}
              >
                {chatMessages.map((msg, idx) => (
                  <Box key={idx} mb={0.5}>
                    {msg}
                  </Box>
                ))}
              </Box>
              <TextField
                size="small"
                placeholder="Ask something..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                fullWidth
              />
              <Button variant="contained" onClick={handleSendMessage} sx={{ mt: 1 }}>
                Send
              </Button>
            </Box>
          )}
        </Box>


        <Paper
          square
          sx={{
            bgcolor: isDarkMode ? "#1e1e2f" : "#eee",
            color: isDarkMode ? "#fff" : "#333",
            p: 1,
          }}
        >
          <Output setAgent={setAgent} />
        </Paper>
      </Box>
    </Box>
  );
}

export default EditorWindow;
