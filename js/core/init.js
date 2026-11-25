// ============================================================
//  初始化
// ============================================================
document.getElementById('previewModal').addEventListener('click', e => { if (e.target.id === 'previewModal') closeModal(); });
document.getElementById('importModal').addEventListener('click', e => { if (e.target.id === 'importModal') closeImportModal(); });
document.getElementById('namerImportModal').addEventListener('click', e => { if (e.target.id === 'namerImportModal') closeNamerImport(); });

if (typeof captureAiInputDefaults === 'function') captureAiInputDefaults();
if (typeof migrateAiInputToCurrentChar === 'function') migrateAiInputToCurrentChar();
bindTabEvents();
bindCharacterFormAutoSave();
initCharSystem();
renderInspoTags();
renderCurrentInspoDisplay();
renderNamerTags('surname');
renderNamerTags('charname');
initProviderSystem();
bindModuleCheckboxes();
bindAiSubTabEvents();
initCloudSync();
if (typeof applyCurrentCharAiInput === 'function') applyCurrentCharAiInput();