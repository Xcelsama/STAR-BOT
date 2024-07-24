import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

const repoUrl = 'https://github.com/Xcelsama/STAR-V2';
const repoDir = join(process.cwd(), 'STAR-V2'); // Directory where the repo is expected to be

const handler = async (m, { conn, text }) => {
  if (conn.user.jid === conn.user.jid) {
    // Function to check if the directory is a Git repository
    const isGitRepository = (directory) => {
      return existsSync(join(directory, '.git'));
    };

    try {
      if (existsSync(repoDir) && isGitRepository(repoDir)) {
        // Pull the latest changes if it is already a Git repository
        conn.reply(m.chat, 'Updating the repository...', m);
        let stdout = execSync('git pull', { cwd: repoDir });
        conn.reply(m.chat, 'Repository updated successfully.\n\n' + stdout.toString(), m);
      } else {
        conn.reply(m.chat, `Error: The directory ${repoDir} does not exist or is not a git repository. Please clone the repository first.`, m);
      }
    } catch (error) {
      console.error('Git operation failed:', error); // Log to console for debugging
      conn.reply(m.chat, `Error occurred: ${error.message}`, m);
    }
  }
};

handler.help = ['update'];
handler.tags = ['owner'];
handler.command = ['update', 'actualizar', 'fix', 'fixed'];
handler.rowner = true;

export default handler;